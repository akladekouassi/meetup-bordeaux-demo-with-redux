import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';
import { Colors } from './colors';

export const BaseTheme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.blue[900],
    },
  },
  typography: {
    h1: {
      fontSize: 42,
      color: Colors.brown[700],
      letterSpacing: 0.33,
    },
    h2: {
      fontSize: 22,
      color: Colors.brown[700],
      letterSpacing: 0.33,
    },
  },
  props: {
    MuiButton: {
      disableFocusRipple: true,
      disableRipple: true,
    },
  },
  overrides: {
    MuiTypography: {
      colorTextSecondary: { color: Colors.brown[500] },
    },
    MuiButton: {
      root: {
        fontSize: 17,
        fontWeight: 500,
        letterSpacing: 0.48,
        textTransform: 'initial',
        minWidth: 'auto',

        '&.Mui-disabled': {
          color: Colors.brown[500],
        },
      },
      label: {
        whiteSpace: 'nowrap',
      },
      contained: {
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
        padding: '9px 12px',
        fontWeight: 500,
      },
      containedPrimary: {
        backgroundColor: Colors.blue[500],
        border: `1px solid ${Colors.blue[900]}`,

        '&:hover': {
          backgroundColor: Colors.blue[900],
          boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.3)',
        },

        '&.Mui-disabled': {
          borderColor: 'transparent',
        },
      },
      outlined: {
        border: `1px solid ${Colors.brown[300]}`,
        color: Colors.brown[700],
        padding: '9px 12px',
      },
    },
    MuiPopover: {
      paper: {
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
      },
    },
    MuiPaper: {
      root: {
        color: 'inherit',
      },
    },
    MuiListItem: {
      root: {
        color: Colors.brown[700],
      },
    },
    MuiCard: {
      root: {
        borderRadius: 10,
        boxShadow: 'none',
      },
    },
    MuiCardHeader: {
      action: {
        marginTop: 0,
        marginRight: 0,
      },
    },
    MuiTableCell: {
      root: {
        color: Colors.brown[700],
        borderBottom: `1px solid ${Colors.brown[300]}`,
        paddingTop: 13,
        paddingBottom: 13,
      },
      body: {
        color: Colors.brown[700],
      },
      head: {
        color: Colors.brown[700],
        letterSpacing: 0.25,
        paddingTop: 29,
        borderBottom: 'none',
      },
      stickyHeader: {
        backgroundColor: '#FFFFFF',
      },
    },
    MuiDialogActions: {
      spacing: {
        '& > :not(:first-child)': {
          marginLeft: 16,
        },
      },
    },
  },
});

export default BaseTheme;
