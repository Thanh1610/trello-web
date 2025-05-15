import { useState } from 'react';
import { Box, MenuItem, Menu, Divider, ListItemIcon, Avatar, Tooltip, IconButton } from '@mui/material';
import { PersonAdd, Settings, Logout } from '@mui/icons-material';

function Profiles() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ padding: 0 }}
                    aria-controls={open ? 'account-menu-profiles' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar
                        sx={{ width: 32, height: 32 }}
                        alt="Tạ Tuấn Thành"
                        src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/279180270_3134768223504603_6401090039492819929_n.jpg?stp=c0.180.1080.1080a_cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=28885b&_nc_ohc=99gUmHB2zR4Q7kNvwExz6jb&_nc_oc=Adl4GOnrmNwuigiwej8fW9ZqY3elY0sF6ShLzb3E1_7zkCQ4dQIY9l1-NfrRzmhrtvs&_nc_zt=24&_nc_ht=scontent.fhan17-1.fna&_nc_gid=wzr0BOwPrG4H4SPPgBrKgQ&oh=00_AfK-6s-dV17kcyl0_RjwC98yHYC_WLuNAUnRR4PU1Gbt7Q&oe=682B7CDD"
                    />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu-profiles"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar
                        sx={{ width: 32, height: 32 }}
                        alt="Tạ Tuấn Thành"
                        src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/279180270_3134768223504603_6401090039492819929_n.jpg?stp=c0.180.1080.1080a_cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=28885b&_nc_ohc=99gUmHB2zR4Q7kNvwExz6jb&_nc_oc=Adl4GOnrmNwuigiwej8fW9ZqY3elY0sF6ShLzb3E1_7zkCQ4dQIY9l1-NfrRzmhrtvs&_nc_zt=24&_nc_ht=scontent.fhan17-1.fna&_nc_gid=wzr0BOwPrG4H4SPPgBrKgQ&oh=00_AfK-6s-dV17kcyl0_RjwC98yHYC_WLuNAUnRR4PU1Gbt7Q&oe=682B7CDD"
                    />
                    Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Avatar
                        sx={{ width: 32, height: 32 }}
                        alt="Tạ Tuấn Thành"
                        src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/279180270_3134768223504603_6401090039492819929_n.jpg?stp=c0.180.1080.1080a_cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=28885b&_nc_ohc=99gUmHB2zR4Q7kNvwExz6jb&_nc_oc=Adl4GOnrmNwuigiwej8fW9ZqY3elY0sF6ShLzb3E1_7zkCQ4dQIY9l1-NfrRzmhrtvs&_nc_zt=24&_nc_ht=scontent.fhan17-1.fna&_nc_gid=wzr0BOwPrG4H4SPPgBrKgQ&oh=00_AfK-6s-dV17kcyl0_RjwC98yHYC_WLuNAUnRR4PU1Gbt7Q&oe=682B7CDD"
                    />
                    My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </Box>
    );
}
export default Profiles;
