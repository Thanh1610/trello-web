import Box from '@mui/material/Box';
import {
    DndContext,
    useSensor,
    useSensors,
    PointerSensor,
    MouseSensor,
    TouchSensor,
    DragOverlay,
    defaultDropAnimationSideEffects,
    closestCorners,
    pointerWithin,
    getFirstCollision,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import ListColumns from './ListColumns/ListColumns';
import { mapOrder } from '~/utils/sorts';
import { useState, useEffect, useCallback, useRef } from 'react';
import Column from './ListColumns/Column/Column';
import Card from './ListColumns/Column/ListCards/Card/Card';
import { cloneDeep, isEmpty } from 'lodash';
import { generatePlaceholderCard } from '~/utils/formatters';

const ACTIVE_DRAG_ITEM_TYPE = {
    COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
    CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD',
};

function BoardContent({ board }) {
    const [orderedColumns, setOrderedColumns] = useState([]);

    //phân biệt kéo column hay card
    // eslint-disable-next-line no-unused-vars
    const [activeDragItemId, setActiveDragItemId] = useState(null);
    const [activeDragItemIdType, setActiveDragItemIdType] = useState(null);
    const [activeDragItemIdData, setActiveDragItemIdData] = useState(null);
    const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] = useState(null);

    const lastOverId = useRef(null);

    // const pointerSensor = useSensor(PointerSensor, {
    //     //Yêu cầu kéo chuột 10px mới kích hoạt sự kiện phải kết hợp thêm touchAction:none
    //     activationConstraint: {
    //         distance: 10,
    //     },
    // });

    const mouseSensor = useSensor(MouseSensor, {
        //Yêu cầu kéo chuột 10px mới kích hoạt sự kiện
        activationConstraint: {
            distance: 10,
        },
    });
    const touchSensor = useSensor(TouchSensor, {
        // nhấn giữ 250ms mà 5px kích hoạt skien
        activationConstraint: {
            delay: 250,
            tolerance: 5,
        },
    });

    const sensors = useSensors(mouseSensor, touchSensor);

    useEffect(() => {
        setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'));
    }, [board]);

    //Tìm column theo cardId
    const findColumnByCardId = (cardId) => {
        return orderedColumns.find((column) => column?.cards.some((card) => card._id === cardId));
    };

    const moveCardBetweenDifferentColumns = (
        overColumn,
        overCardId,
        active,
        over,
        activeColumn,
        activeCardId,
        activeCardData,
    ) => {
        setOrderedColumns((prevColums) => {
            //Tìm vị trí (index) của overCard trong column đích (nơi sắp được thả)
            const overCardIndex = overColumn?.cards?.findIndex((card) => card._id === overCardId);

            let newCardIndex;
            const isBelowOverItem =
                active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height;

            const modifier = isBelowOverItem ? 1 : 0;

            newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1;

            //clone mảng orderedColumns ra 1 mảng mới
            const nextColumns = cloneDeep(prevColums);
            const nextActiveColumn = nextColumns.find((column) => column._id === activeColumn._id);
            const nextOverColumn = nextColumns.find((column) => column._id === overColumn._id);

            if (nextActiveColumn) {
                nextActiveColumn.cards = nextActiveColumn.cards.filter((card) => card._id !== activeCardId);

                if (isEmpty(nextActiveColumn.cards)) {
                    nextActiveColumn.cards = [generatePlaceholderCard(nextActiveColumn)];
                }
                nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map((card) => card._id);
            }

            if (nextOverColumn) {
                nextOverColumn.cards = nextOverColumn.cards.filter((card) => card._id !== activeCardId);

                const rebuild_activeCardData = {
                    ...activeCardData,
                    columnId: nextOverColumn._id,
                };

                nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, rebuild_activeCardData);

                nextOverColumn.cards = nextOverColumn.cards.filter((card) => !card.FE_PlaceholderCard);

                nextOverColumn.cardOrderIds = nextOverColumn.cards.map((card) => card._id);
            }
            return nextColumns;
        });
    };

    // Khi bắt đầu kéo (drag) phần tử
    const handleDragStart = (e) => {
        const isCard = !!e?.active?.data?.current?.columnId;
        const itemType = isCard ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN;

        setActiveDragItemId(e?.active?.id);
        setActiveDragItemIdType(itemType);
        setActiveDragItemIdData(e?.active?.data?.current);

        if (isCard) {
            setOldColumnWhenDraggingCard(findColumnByCardId(e?.active?.id));
        }
    };

    // Khi đang kéo (drag) phần tử
    const handleDragOver = (e) => {
        // nếu kéo column thì không làm gì
        if (activeDragItemIdType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return;

        const { active, over } = e;
        if (!active || !over) return;

        //Tìm card đang được kéo
        const {
            id: activeCardId,
            data: { current: activeCardData },
        } = active;
        const { id: overCardId } = over;

        //Tìm 2 column theo cardId
        const activeColumn = findColumnByCardId(activeCardId);
        const overColumn = findColumnByCardId(overCardId);
        if (!activeColumn || !overColumn) return;

        if (activeColumn._id !== overColumn._id) {
            moveCardBetweenDifferentColumns(
                overColumn,
                overCardId,
                active,
                over,
                activeColumn,
                activeCardId,
                activeCardData,
            );
        }
    };

    // Khi kết thúc kéo (drag) phần tử
    const handleDragEnd = (e) => {
        const { active, over } = e;

        if (!active || !over) return;

        if (activeDragItemIdType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
            //Tìm card đang được kéo
            const {
                id: activeCardId,
                data: { current: activeCardData },
            } = active;
            const { id: overCardId } = over;

            //Tìm 2 column theo cardId
            const activeColumn = findColumnByCardId(activeCardId);
            const overColumn = findColumnByCardId(overCardId);

            if (!activeColumn || !overColumn) return;

            if (oldColumnWhenDraggingCard._id !== overColumn._id) {
                moveCardBetweenDifferentColumns(
                    overColumn,
                    overCardId,
                    active,
                    over,
                    activeColumn,
                    activeCardId,
                    activeCardData,
                );
            } else {
                const oldCardIndex = oldColumnWhenDraggingCard?.cards?.findIndex((c) => c._id === activeDragItemId);
                const newCardIndex = overColumn?.cards?.findIndex((c) => c._id === overCardId);

                const dndOrderedCards = arrayMove(oldColumnWhenDraggingCard?.cards, oldCardIndex, newCardIndex);

                setOrderedColumns((prevColumns) => {
                    //clone mảng orderedColumns ra 1 mảng mới
                    const nextColumns = cloneDeep(prevColumns);
                    const targetCloumn = nextColumns.find((column) => column._id === overColumn._id);
                    targetCloumn.cards = dndOrderedCards;
                    targetCloumn.cardOrderIds = dndOrderedCards.map((card) => card._id);
                    return nextColumns;
                });
            }
        }

        if (activeDragItemIdType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
            if (active.id !== over.id) {
                setOrderedColumns((orderedColumns) => {
                    // Vị trí cũ
                    const oldIndex = orderedColumns.findIndex((c) => c._id === active.id);
                    // Vị trí mới
                    const newIndex = orderedColumns.findIndex((c) => c._id === over.id);

                    return arrayMove(orderedColumns, oldIndex, newIndex);
                });
            }
        }

        setActiveDragItemId(null);
        setActiveDragItemIdData(null);
        setActiveDragItemIdType(null);
        setOldColumnWhenDraggingCard(null);
    };

    const customDropAnimation = {
        sideEffects: defaultDropAnimationSideEffects({
            styles: {
                active: {
                    opacity: 0.5,
                },
            },
        }),
    };

    const collisionDetectionStrategy = useCallback(
        (args) => {
            if (activeDragItemIdType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
                return closestCorners({ ...args });
            }

            const pointerIntersections = pointerWithin(args);

            if (!pointerIntersections?.length) return;
            // const intersections = pointerIntersections.length > 0 ? pointerIntersections : rectIntersection(args);

            let overId = getFirstCollision(pointerIntersections, 'id');
            if (overId) {
                const checkColumn = orderedColumns.find((column) => column._id === overId);

                if (checkColumn) {
                    overId = closestCorners({
                        ...args,
                        droppableContainers: args.droppableContainers.filter(
                            (container) => container.id !== overId && checkColumn?.cardOrderIds?.includes(container.id),
                        )[0]?.id,
                    });
                }
                lastOverId.current = overId;
                return [{ id: overId }];
            }

            return lastOverId.current ? [{ id: lastOverId.current }] : [];
        },
        [activeDragItemIdType, orderedColumns],
    );

    return (
        <DndContext
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDragStart={handleDragStart}
            sensors={sensors}
            collisionDetection={collisionDetectionStrategy}
        >
            <Box
                sx={{
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#33495e' : '#1976d2'),
                    width: '100%',
                    height: (theme) => theme.trello.boardBarContentHeight,
                    py: '10px',
                }}
            >
                <ListColumns columns={orderedColumns} />
                <DragOverlay dropAnimation={customDropAnimation}>
                    {activeDragItemIdType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
                        <Column column={activeDragItemIdData} isDragging />
                    )}
                    {activeDragItemIdType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
                        <Card card={activeDragItemIdData} isDragging />
                    )}
                </DragOverlay>
            </Box>
        </DndContext>
    );
}

export default BoardContent;
