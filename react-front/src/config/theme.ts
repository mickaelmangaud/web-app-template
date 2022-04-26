import { colors, createTheme, Theme } from '@mui/material';

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: colors.red[500],
    },
  },
});

export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: colors.blue[500],
    },
  },
});
