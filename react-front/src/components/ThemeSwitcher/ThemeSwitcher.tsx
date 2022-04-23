import { ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '../../config';
import { useAppSelector } from '../../store/store';

interface IThemeSwitcher {
  children: React.ReactChild;
}

export const ThemeSwitcher: React.FC<IThemeSwitcher> = ({ children }) => {
  const { themeMode } = useAppSelector((state) => state.ui);
  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
