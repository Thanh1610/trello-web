import { createTheme } from '@mui/material/styles';
import { red, teal, deepOrange, cyan, orange } from '@mui/material/colors';

const theme = createTheme({
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
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    '*::-webkit-scrollbar': {
                        width: '8px',
                        height: '8px',
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: '#bdc3c7',
                        borderRadius: '8px',
                    },
                    '*::-webkit-scrollbar-thumb:hover': {
                        backgroundColor: '#00b894',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },

        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => {
                    return {
                        color: theme.palette.primary.main,
                        fontSize: '0.875rem',
                    };
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => {
                    return {
                        color: theme.palette.primary.main,
                        fontSize: '0.875rem',
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.light,
                        },
                        '&:hover': {
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: theme.palette.primary.main,
                            },
                        },
                        '& fieldset': {
                            borderWidth: '1px !important',
                        },
                    };
                },
            },
        },
    },
});
export default theme;
