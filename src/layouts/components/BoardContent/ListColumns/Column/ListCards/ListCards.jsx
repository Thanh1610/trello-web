import Box from '@mui/material/Box';
import Card from './Card/Card';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

function ListCards({ cards }) {
    return (
        <SortableContext items={cards?.map((arr) => arr._id)} strategy={verticalListSortingStrategy}>
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
                            ${theme.trello.headerHeight} -
                            ${theme.trello.footerHeight}
                        )`.trim(),
                    '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
                    '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' },
                    scrollBehavior: 'smooth ',
                }}
            >
                {cards?.map((card) => (
                    <Card key={card?._id} card={card} />
                ))}
            </Box>
        </SortableContext>
    );
}

export default ListCards;
