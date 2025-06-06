/* eslint-disable no-unused-vars */
import { useState, memo } from 'react';
import { Box, MenuItem, Menu, Divider, ListItemText, ListItemIcon, Typography, Tooltip, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArchiveIcon from '@mui/icons-material/Archive';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { ContentPaste, ContentCopy, ContentCut, AddCard } from '@mui/icons-material';
import ListCards from './ListCards/ListCards';
import { mapOrder } from '~/utils/sorts';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function Column({ column }) {
    //drag
    const { attributes, listeners, setNodeRef, transform, isDragging } = useSortable({
        id: column._id,
        data: { ...column },
    });

    const dndKitColumnStyle = {
        transform: CSS.Translate.toString(transform),
        // transition,
        transition: transform ? 'transform 100ms ease' : undefined,
        touchAction: 'none',
        opacity: isDragging ? 0.6 : undefined,
        height: '100%',
    };

    //Mui
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id');

    return (
        <div ref={setNodeRef} style={dndKitColumnStyle} {...attributes}>
            <Box
                {...listeners} //chỉ lắng nghe skien khi click vao box
                sx={{
                    userSelect: 'none',
                    minWidth: '300px',
                    maxWidth: '300px',
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
                    ml: 2,
                    borderRadius: '6px',
                    height: 'fit-content',
                    maxHeight: (theme) => `calc(${theme.trello.boardBarContentHeight} - ${theme.spacing(5)})`,
                }}
            >
                {/* header column */}
                <Box
                    sx={{
                        height: (theme) => theme.trello.headerHeight,
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                        }}
                    >
                        {column?.title}
                    </Typography>
                    <Box>
                        <Tooltip title="More Options">
                            <ExpandMoreIcon
                                sx={{ color: 'text.primary', cursor: 'pointer' }}
                                id="basic-column-dropdown"
                                aria-controls={open ? 'basic-menu-workspaces' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            />
                        </Tooltip>
                        <Menu
                            id="basic-menu-workspaces"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-column-dropdown',
                            }}
                        >
                            <MenuItem>
                                <ListItemIcon>
                                    <AddCard fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Add new card</ListItemText>
                            </MenuItem>

                            <MenuItem>
                                <ListItemIcon>
                                    <ContentCut fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Cut</ListItemText>
                            </MenuItem>

                            <MenuItem>
                                <ListItemIcon>
                                    <ContentCopy fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Copy</ListItemText>
                            </MenuItem>

                            <MenuItem>
                                <ListItemIcon>
                                    <ContentPaste fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Paste</ListItemText>
                            </MenuItem>

                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <ArchiveIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Archive this column</ListItemText>
                            </MenuItem>

                            <MenuItem>
                                <ListItemIcon>
                                    <DeleteForeverIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Remove this column</ListItemText>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>

                {/* card list */}
                <ListCards cards={orderedCards} />

                {/* footer column */}
                <Box
                    sx={{
                        height: (theme) => theme.trello.footerHeight,
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Button startIcon={<AddCard />}>Add new card</Button>
                    <Tooltip title="Drag to move">
                        <DragHandleIcon sx={{ cursor: 'pointer' }} />
                    </Tooltip>
                </Box>
            </Box>
        </div>
    );
}

export default memo(Column);
