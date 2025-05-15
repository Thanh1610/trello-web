import Box from '@mui/material/Box';
import { Chip, Button, Tooltip } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

function BoardBar() {
    const MENU_STYLES = {
        color: 'white',
        bgcolor: 'transparent',
        border: 'none',
        px: '5px',
        borderRadius: '4px',
        '.MuiSvgIcon-root': {
            color: 'white',
        },
        '&:hover': {
            bgcolor: 'primary.50',
        },
    };
    return (
        <Box
            sx={{
                width: '100%',
                height: (theme) => theme.trello.boardBarHeight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 2,
                gap: 2,
                overflowX: 'auto',
                borderBottom: '1px solid #00bfa5',
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#33495e' : '#1976d2'),
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                <Chip sx={MENU_STYLES} icon={<DashboardIcon />} label="Tạ Tuấn Thành" clickable />

                <Chip sx={MENU_STYLES} icon={<VpnLockIcon />} label="Public/Private Workspaces" clickable />

                <Chip sx={MENU_STYLES} icon={<AddToDriveIcon />} label="Add To Google Drive" clickable />

                <Chip sx={MENU_STYLES} icon={<BoltIcon />} label="Automation" clickable />

                <Chip sx={MENU_STYLES} icon={<FilterListIcon />} label="Filters" clickable />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                <Button
                    variant="outlined"
                    startIcon={<PersonAddIcon />}
                    sx={{
                        color: 'white',
                        borderColor: 'white',
                        '&:hover': { borderColor: 'white' },
                    }}
                >
                    Invite
                </Button>

                <AvatarGroup
                    max={7}
                    sx={{
                        '& .MuiAvatar-root': {
                            width: '32px',
                            height: '32px',
                            border: 'none',
                        },
                    }}
                >
                    <Tooltip title="Tạ Tuấn Thành">
                        <Avatar
                            alt="Tạ Tuấn Thành"
                            src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/279180270_3134768223504603_6401090039492819929_n.jpg?stp=c0.180.1080.1080a_cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=28885b&_nc_ohc=99gUmHB2zR4Q7kNvwExz6jb&_nc_oc=Adl4GOnrmNwuigiwej8fW9ZqY3elY0sF6ShLzb3E1_7zkCQ4dQIY9l1-NfrRzmhrtvs&_nc_zt=24&_nc_ht=scontent.fhan17-1.fna&_nc_gid=wzr0BOwPrG4H4SPPgBrKgQ&oh=00_AfK-6s-dV17kcyl0_RjwC98yHYC_WLuNAUnRR4PU1Gbt7Q&oe=682B7CDD"
                        />
                    </Tooltip>

                    <Tooltip title="Tạ Tuấn Thành">
                        <Avatar
                            alt="Tạ Tuấn Thành"
                            src="https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?semt=ais_hybrid&w=740"
                        />
                    </Tooltip>

                    <Tooltip title="Tạ Tuấn Thành">
                        <Avatar
                            alt="Tạ Tuấn Thành"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3V58D9cduOmdFH553EvDARyg0LqU2faSABo6zPOIDApJORh5iInmhl5AVJriwtYhDcFg&usqp=CAU"
                        />
                    </Tooltip>

                    <Tooltip title="Tạ Tuấn Thành">
                        <Avatar
                            alt="Tạ Tuấn Thành"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAoi2q5T-F3MI2F7jH_TyQPncn7cqD6itPQFdCe4832fAFNcuJsUkVB0V_gjUJjive9js&usqp=CAU"
                        />
                    </Tooltip>

                    <Tooltip title="Tạ Tuấn Thành">
                        <Avatar
                            alt="Tạ Tuấn Thành"
                            src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/279180270_3134768223504603_6401090039492819929_n.jpg?stp=c0.180.1080.1080a_cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=28885b&_nc_ohc=99gUmHB2zR4Q7kNvwExz6jb&_nc_oc=Adl4GOnrmNwuigiwej8fW9ZqY3elY0sF6ShLzb3E1_7zkCQ4dQIY9l1-NfrRzmhrtvs&_nc_zt=24&_nc_ht=scontent.fhan17-1.fna&_nc_gid=wzr0BOwPrG4H4SPPgBrKgQ&oh=00_AfK-6s-dV17kcyl0_RjwC98yHYC_WLuNAUnRR4PU1Gbt7Q&oe=682B7CDD"
                        />
                    </Tooltip>

                    <Tooltip title="Tạ Tuấn Thành">
                        <Avatar
                            alt="Tạ Tuấn Thành"
                            src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/279180270_3134768223504603_6401090039492819929_n.jpg?stp=c0.180.1080.1080a_cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=28885b&_nc_ohc=99gUmHB2zR4Q7kNvwExz6jb&_nc_oc=Adl4GOnrmNwuigiwej8fW9ZqY3elY0sF6ShLzb3E1_7zkCQ4dQIY9l1-NfrRzmhrtvs&_nc_zt=24&_nc_ht=scontent.fhan17-1.fna&_nc_gid=wzr0BOwPrG4H4SPPgBrKgQ&oh=00_AfK-6s-dV17kcyl0_RjwC98yHYC_WLuNAUnRR4PU1Gbt7Q&oe=682B7CDD"
                        />
                    </Tooltip>

                    <Tooltip title="Tạ Tuấn Thành">
                        <Avatar
                            alt="Tạ Tuấn Thành"
                            src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/279180270_3134768223504603_6401090039492819929_n.jpg?stp=c0.180.1080.1080a_cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=28885b&_nc_ohc=99gUmHB2zR4Q7kNvwExz6jb&_nc_oc=Adl4GOnrmNwuigiwej8fW9ZqY3elY0sF6ShLzb3E1_7zkCQ4dQIY9l1-NfrRzmhrtvs&_nc_zt=24&_nc_ht=scontent.fhan17-1.fna&_nc_gid=wzr0BOwPrG4H4SPPgBrKgQ&oh=00_AfK-6s-dV17kcyl0_RjwC98yHYC_WLuNAUnRR4PU1Gbt7Q&oe=682B7CDD"
                        />
                    </Tooltip>

                    <Tooltip title="Tạ Tuấn Thành">
                        <Avatar
                            alt="Tạ Tuấn Thành"
                            src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/279180270_3134768223504603_6401090039492819929_n.jpg?stp=c0.180.1080.1080a_cp0_dst-jpg_s40x40_tt6&_nc_cat=109&ccb=1-7&_nc_sid=28885b&_nc_ohc=99gUmHB2zR4Q7kNvwExz6jb&_nc_oc=Adl4GOnrmNwuigiwej8fW9ZqY3elY0sF6ShLzb3E1_7zkCQ4dQIY9l1-NfrRzmhrtvs&_nc_zt=24&_nc_ht=scontent.fhan17-1.fna&_nc_gid=wzr0BOwPrG4H4SPPgBrKgQ&oh=00_AfK-6s-dV17kcyl0_RjwC98yHYC_WLuNAUnRR4PU1Gbt7Q&oe=682B7CDD"
                        />
                    </Tooltip>
                </AvatarGroup>
            </Box>
        </Box>
    );
}

export default BoardBar;
