import Box from '@mui/material/Box';
import Card from './Card/Card';

function ListCards({ HEADER_HEIGHT, FOOTER_HEIGHT }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                px: '5px',
                mx: '5px',
                gap: 1,
                overflowX: 'hidden',
                overflowY: 'auto',
                maxHeight: (theme) =>
                    `calc(
                        ${theme.trello.boardBarContentHeight} -
                        ${theme.spacing(5)} -
                        ${HEADER_HEIGHT} -
                        ${FOOTER_HEIGHT}
                    )`.trim(),
                '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
                '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' },
                scrollBehavior: 'smooth ',
            }}
        >
            <Card />
            <Card hideMedia />
            <Card hideMedia />
            <Card hideMedia />
            <Card hideMedia />
            <Card hideMedia />
            <Card hideMedia />
        </Box>
    );
}

export default ListCards;
