import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Column from './Column/Column';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';

function ListColumns({ columns }) {
    return (
        <SortableContext items={columns?.map((arr) => arr._id)} strategy={horizontalListSortingStrategy}>
            <Box
                sx={{
                    bgcolor: 'inherit',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    '&::-webkit-scrollbar-track': { m: 2 },
                    scrollBehavior: 'smooth ',
                }}
            >
                {/* box column */}
                {columns.map((column) => (
                    <Column key={column?._id} column={column} />
                ))}

                {/* add column button */}
                <Box
                    sx={{
                        minWidth: '200px',
                        maxWidth: '200px',
                        mx: 2,
                        borderRadius: '6px',
                        bgcolor: '#ffffff3d',
                        height: 'fit-content',
                    }}
                >
                    <Button
                        sx={{
                            color: 'white',
                            width: '100%',
                            justifyContent: 'flex-start',
                            py: 1,
                            pl: 2.5,
                        }}
                        startIcon={<PlaylistAddIcon />}
                    >
                        Add new column
                    </Button>
                </Box>
            </Box>
        </SortableContext>
    );
}

export default ListColumns;
