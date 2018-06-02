import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-abel';

const theme = createMuiTheme({
  palette: {
    background: {
      default: lightBlue[200]
    },
    primary: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
  typography: {
    fontFamily: ['"Abel"', 'sans-serif'].join(','),
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
