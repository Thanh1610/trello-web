import Button from '@mui/material/Button';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { useColorScheme } from '@mui/material/styles';

function ModeSwitcher() {
    const { mode, setMode } = useColorScheme();

    const toggleMode = () => {
        const modes = ['light', 'dark', 'system'];
        setMode(modes[(modes.indexOf(mode) + 1) % modes.length]);
    };

    return (
        <Button variant="contained" onClick={toggleMode}>
            {mode === 'light' ? 'Switch to Dark' : mode === 'dark' ? 'Switch to System' : 'Switch to Light'}
        </Button>
    );
}

function App() {
    return (
        <>
            <ModeSwitcher />
            <hr />
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <AccessAlarm />
            <ThreeDRotation />
        </>
    );
}

export default App;
