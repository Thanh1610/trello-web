import { Box, Typography, Button, TextField, Badge, Tooltip, SvgIcon, InputAdornment } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import ModeSelect from '~/components/SelectMode';
import Workspaces from './menus/Workspaces';
import Recent from './menus/Recent';
import Starred from './menus/Starred';
import Templates from './menus/Templates';
import Profiles from './menus/Profiles';
import TrelloLogo from '~/assets/Trello.svg?react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useState } from 'react';

function AppBar() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <Box
            px={2}
            sx={{
                width: '100%',
                height: (theme) => theme.trello.appBarHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
                overflowX: 'auto',
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'),
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                <AppsIcon sx={{ color: 'white' }} />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 0.5 }}>
                    <SvgIcon component={TrelloLogo} inheritViewBox fontSize="small" sx={{ color: 'white' }} />
                    <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>
                        Trello
                    </Typography>
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                    <Workspaces />
                    <Recent />
                    <Starred />
                    <Templates />
                    <Button variant="outlined" startIcon={<LibraryAddIcon />} sx={{ color: 'white' }}>
                        Create
                    </Button>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                <TextField
                    id="outlined-search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    label="Search..."
                    type="text"
                    size="small"
                    sx={{
                        minWidth: '120px',
                        maxWidth: '180px',
                        '& label': { color: 'white' },
                        '& input': { color: 'white' },
                        '& label.Mui-focused': { color: 'white' },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'white' },
                            '&:hover fieldset': { borderColor: 'white' },
                            '&.Mui-focused fieldset': { borderColor: 'white' },
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchOutlinedIcon sx={{ color: 'white' }} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <CloseOutlinedIcon
                                onClick={() => setSearchValue('')}
                                fontSize="small"
                                sx={{ color: searchValue ? 'white' : 'transparent', cursor: 'pointer' }}
                            />
                        ),
                    }}
                />
                <ModeSelect />
                <Tooltip title="Notifications">
                    <Badge color="warning" variant="dot">
                        <NotificationsNoneIcon sx={{ cursor: 'pointer', color: 'white' }} />
                    </Badge>
                </Tooltip>

                <Tooltip title="Help">
                    <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'white' }} />
                </Tooltip>

                <Profiles />
            </Box>
        </Box>
    );
}

export default AppBar;
