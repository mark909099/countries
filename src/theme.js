import { createTheme } from '@mui/material/styles';
import { blue, lightBlue } from '@mui/material/colors';

const theme = createTheme({
    typography: {
        fontFamily: "Halvetica"
    },
    palette: {
      primary: {
        main: blue[700],
      },
      secondary: {
        main: lightBlue[300],
      },
    },
  });

theme.typography.h2 = {
  fontWeight:'700',
  [theme.breakpoints.up('xs')]: {
    fontSize: '3.5rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '7rem',
  },
};

theme.typography.h6 = {
  fontWeight:'300',
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.2rem',
  },
};

  export default theme;