import { Container } from '@mui/material';
import AppBar from '../../components/AppBar';
import BoardBar from '../../layouts/components/BoardBar/BoardBar';
import BoardContent from '../../layouts/components/BoardContent';

function Board() {
    return (
        <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
            <AppBar />
            <BoardBar />
            <BoardContent />
        </Container>
    );
}

export default Board;
