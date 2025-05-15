import { createTheme } from '@mui/material/styles';
import { red, teal, deepOrange, cyan, orange } from '@mui/material/colors';

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    trello: {
        appBarHeight: '58px',
        boardBarHeight: '60px',
    },
    colorSchemes: {
        light: {
            palette: {
                primary: teal,
                secondary: deepOrange,
                error: {
                    main: red.A400,
                },
            },
        },
        dark: {
            palette: {
                primary: cyan,
                secondary: orange,
                error: {
                    main: red.A200,
                },
            },
        },
    },
});
export default theme;
