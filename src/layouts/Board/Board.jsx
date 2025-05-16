import { Container } from '@mui/material';
import AppBar from '~/components/AppBar/AppBar';
import BoardBar from '~/layouts/components/BoardBar/BoardBar';
import BoardContent from '~/layouts/components/BoardContent/BoardContent';
import { mockData } from '~/Apis/mock-data';

function Board() {
    return (
        <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
            <AppBar />
            <BoardBar board={mockData?.board} />
            <BoardContent board={mockData?.board} />
        </Container>
    );
}

export default Board;
