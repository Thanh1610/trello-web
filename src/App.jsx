import { useColorScheme } from '@mui/material/styles';
import { Container } from '@mui/material';

//select mode
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Box from '@mui/material/Box';

function SelectMode() {
    const { mode, setMode } = useColorScheme();

    const handleChange = (event) => {
        const selectedMode = event.target.value;
        setMode(selectedMode);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="lable-mode">Mode</InputLabel>
            <Select
                labelId="lable-mode"
                id="demo-select-small"
                value={mode || 'system'}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value="light">
                    <Box sx={{ display: 'flex', justifyItems: 'center', gap: 1, alignItems: 'center' }}>
                        <LightModeIcon fontSize="small" />
                        Light
                    </Box>
                </MenuItem>
                <MenuItem value="system">
                    <Box sx={{ display: 'flex', justifyItems: 'center', gap: 1, alignItems: 'center' }}>
                        <SettingsBrightnessIcon fontSize="small" />
                        System
                    </Box>
                </MenuItem>
                <MenuItem value="dark">
                    <Box sx={{ display: 'flex', justifyItems: 'center', gap: 1, alignItems: 'center' }}>
                        <DarkModeIcon fontSize="small" />
                        Dark
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    );
}
function App() {
    return (
        <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
            <Box
                sx={{
                    backgroundColor: 'primary.light',
                    with: '100%',
                    height: (theme) => theme.trello.appBarHeight,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <SelectMode />
            </Box>
            <Box
                sx={{
                    backgroundColor: 'primary.dark',
                    with: '100%',
                    height: (theme) => theme.trello.boardBarHeight,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                Board Bar
            </Box>
            <Box
                sx={{
                    backgroundColor: 'primary.main',
                    with: '100%',
                    height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                Content
            </Box>
        </Container>
    );
}

export default App;
