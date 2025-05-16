import Box from '@mui/material/Box';
import ListColumns from './ListColumns/ListColumns';

function BoardContent() {
    return (
        <Box
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#33495e' : '#1976d2'),
                with: '100%',
                height: (theme) => theme.trello.boardBarContentHeight,
                py: '10px',
            }}
        >
            <ListColumns />
        </Box>
    );
}

export default BoardContent;
