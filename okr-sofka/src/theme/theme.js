import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
        light: '#ffc64b',
        main: '#f0950e',
        dark: '#b86700',
    },
    secondary: {
        light: '#fffffe',
        main: '#f8f2cb',
        dark: '#c5bf9a',
    },
    content: {
      white: '#FFFFFF',
      gray: '#F9FAFC',     
  },   
  },
});


export default theme;