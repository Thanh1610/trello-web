import { useColorScheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Box from '@mui/material/Box';

function ModeSelect() {
    const { mode, setMode } = useColorScheme();

    const handleChange = (event) => {
        const selectedMode = event.target.value;
        setMode(selectedMode);
    };

    return (
        <FormControl sx={{ minWidth: '120px' }} size="small">
            <InputLabel id="lable-mode">Mode</InputLabel>
            <Select
                labelId="lable-mode"
                id="demo-select-small"
                value={mode || 'system'}
                label="Mode"
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

export default ModeSelect;
