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
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import ListColumns from './ListColumns/ListColumns';
import { mapOrder } from '~/utils/sorts';
import { useState, useEffect } from 'react';
import Column from './ListColumns/Column/Column';
import Card from './ListColumns/Column/ListCards/Card/Card';

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

    const handleDragStart = (e) => {
        const isCard = !!e?.active?.data?.current?.columnId;
        const itemType = isCard ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN;

        setActiveDragItemId(e?.active?.id);
        setActiveDragItemIdType(itemType);
        setActiveDragItemIdData(e?.active?.data?.current);
    };

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

    const handleDragEnd = (e) => {
        const { active, over } = e;

        if (!over) return;

        if (active.id !== over.id) {
            setOrderedColumns((orderedColumns) => {
                // Vị trí cũ
                const oldIndex = orderedColumns.findIndex((c) => c._id === active.id);
                // Vị trí mới
                const newIndex = orderedColumns.findIndex((c) => c._id === over.id);

                return arrayMove(orderedColumns, oldIndex, newIndex);
            });
            setActiveDragItemId(null), setActiveDragItemIdData(null), setActiveDragItemIdType(null);
        }
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

    return (
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} sensors={sensors}>
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
                    {!activeDragItemIdType && null}
                    {activeDragItemIdType === ACTIVE_DRAG_ITEM_TYPE.COLUMN ? (
                        <Column column={activeDragItemIdData} />
                    ) : (
                        <Card card={activeDragItemIdData} />
                    )}
                </DragOverlay>
            </Box>
        </DndContext>
    );
}

export default BoardContent;
