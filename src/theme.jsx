import { createTheme } from '@mui/material/styles';
// import { red, teal, deepOrange, cyan, orange } from '@mui/material/colors';

const APP_BAR_HEIGHT = '58px';
const BOARD_BAR_HEIGHT = '60px';
const BOARD_BAR_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`;

const theme = createTheme({
    trello: {
        appBarHeight: APP_BAR_HEIGHT,
        boardBarHeight: BOARD_BAR_HEIGHT,
        boardBarContentHeight: BOARD_BAR_CONTENT_HEIGHT,
    },
    colorSchemes: {
        light: {
            // palette: {
            //     primary: teal,
            //     secondary: deepOrange,
            //     error: {
            //         main: red.A400,
            //     },
            // },
        },
        dark: {
            // palette: {
            //     primary: cyan,
            //     secondary: orange,
            //     error: {
            //         main: red.A200,
            //     },
            // },
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    '*::-webkit-scrollbar': {
                        width: '8px',
                        height: '8px',
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: '#dcdde1',
                        borderRadius: '8px',
                    },
                    '*::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: 'white',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderWidth: '0.5px',
                },
            },
        },

        MuiInputLabel: {
            styleOverrides: {
                root: { fontSize: '0.875rem' },
            },
        },

        MuiTypography: {
            styleOverrides: {
                root: { '&.MuiTypography-body1': { fontSize: '0.875rem' } },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                    '& fieldset': { borderWidth: '0.5px !important' },
                    '&:hover fieldset': { borderWidth: '1px !important' },
                    '&.Mui-focused fieldset': { borderWidth: '1px !important' },
                },
            },
        },
    },
});
export default theme;
