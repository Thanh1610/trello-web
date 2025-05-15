import { Box, Typography, Button, TextField, Badge, Tooltip, SvgIcon } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import ModeSelect from '~/components/SelectMode';
import Workspaces from './menus/Workspaces';
import Recent from './menus/Recent';
import Starred from './menus/Starred';
import Templates from './menus/Templates';
import Profiles from './menus/Profiles';
import TrelloLogo from '~/assets/Trello.svg?react';

function AppBar() {
    return (
        <Box
            px={2}
            sx={{
                width: '100%',
                height: (theme) => theme.trello.appBarHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                <AppsIcon sx={{ color: 'primary.main' }} />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 0.5 }}>
                    <SvgIcon component={TrelloLogo} inheritViewBox sx={{ color: 'primary.main' }} />
                    <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>
                        Trello
                    </Typography>
                </Box>
                <Workspaces />
                <Recent />
                <Starred />
                <Templates />
                <Button variant="outlined">Create</Button>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                <TextField id="outlined-search" label="Search..." type="search" size="small" />
                <ModeSelect />
                <Tooltip title="Notifications">
                    <Badge color="secondary" variant="dot">
                        <NotificationsNoneIcon sx={{ cursor: 'pointer' }} />
                    </Badge>
                </Tooltip>

                <Tooltip title="Help">
                    <HelpOutlineIcon sx={{ cursor: 'pointer' }} />
                </Tooltip>

                <Profiles />
            </Box>
        </Box>
    );
}

export default AppBar;
