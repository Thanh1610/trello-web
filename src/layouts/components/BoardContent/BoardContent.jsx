import Box from '@mui/material/Box';
import { DndContext, useSensor, useSensors, PointerSensor, MouseSensor, TouchSensor } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import ListColumns from './ListColumns/ListColumns';
import { mapOrder } from '~/utils/sorts';
import { useState, useEffect } from 'react';

function BoardContent({ board }) {
    const [orderedColumns, setOrderedColumns] = useState([]);

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
        console.log('>>>handleDragEnd: ', e);
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
        }
    };

    return (
        <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
            <Box
                sx={{
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#33495e' : '#1976d2'),
                    width: '100%',
                    height: (theme) => theme.trello.boardBarContentHeight,
                    py: '10px',
                }}
            >
                <ListColumns columns={orderedColumns} />
            </Box>
        </DndContext>
    );
}

export default BoardContent;
