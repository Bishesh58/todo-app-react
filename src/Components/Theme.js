import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[600],
    },
    secondary: {
      main: red[800],
    },
  },
});

export default theme;