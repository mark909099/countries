import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
    typography: {
        fontFamily: "Halvetica"
    },
    palette: {
      primary: {
        main: grey[900],
      },
      secondary: {
        main: grey[800],
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

theme.typography.h3 = {
  fontWeight:'300',
  [theme.breakpoints.up('xs')]: {
    fontSize: '3.5rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5.5rem',
  },
};

theme.typography.h5 = {
  fontWeight:'600',
  [theme.breakpoints.up('xs')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
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

theme.typography.subtitle1 = {
  fontWeight:'300',
  [theme.breakpoints.up('xs')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
  },
};

theme.typography.subtitle2 = {
  fontWeight:'300',
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.6rem',
  },
};

theme.typography.body2 = {
  fontWeight:'300',
  [theme.breakpoints.up('xs')]: {
    fontSize: '0.6rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.4rem',
  },
};

  export default theme;