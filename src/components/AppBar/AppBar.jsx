import ModeSelect from '~/components/SelectMode';
import Box from '@mui/material/Box';

function AppBar() {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.light',
                with: '100%',
                height: (theme) => theme.trello.appBarHeight,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <ModeSelect />
        </Box>
    );
}

export default AppBar;
