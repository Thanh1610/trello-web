import { Container } from '@mui/material';
import AppBar from '~/components/AppBar/AppBar';
import BoardBar from '~/layouts/components/BoardBar/BoardBar';
import BoardContent from '~/layouts/components/BoardContent/BoardContent';
import { mockData } from '~/Apis/mock-data';
import { useEffect, useState } from 'react';
import { fetchBoardDetailsAPI } from '~/Apis';

function Board() {
    const [board, setBoard] = useState(null);

    useEffect(() => {
        const boardId = '68304dc666a2c82d219d0d5d'
        fetchBoardDetailsAPI(boardId)
            .then(res=> {
                setBoard(res)
            })
            
    })
    return (
        <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
            <AppBar />
            <BoardBar board={board} />
            <BoardContent board={board} />
        </Container>
    );
}

export default Board;
