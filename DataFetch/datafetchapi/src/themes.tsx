import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles";
import { createContext, useState, useContext } from "react";

export const lightTheme: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#012954",
    },
    secondary: {
      main: "#0748AE",
    },
    error: {
      main: "#E8415B",
    },
    success: {
      main: "#47C746",
    },
    warning: {
      main: "#DB9900",
    },
    info: {
      main: "#AAAAAE",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF"
    }
  },
  typography: {
    h5: {
      fontSize: 32,
      fontWeight: 700,
    },
    h6: {
      fontSize: 20,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
      fontWeight: 500,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
    },
    button: {
      textTransform: "none",
      fontSize: 14,
      fontWeight: 600,
    },
  },
});

export const darkTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: '#8B0000',
    },
    success: {
      main: '#1db45a',
    },
    warning: {
      main: '#DB9900',
    },
    info: {
      main: '#07848AE',
    },
    background: {
      default: '#121212',
      paper: '#000000',
    },
  },
  typography: {
    h5: {
      fontSize: 32,
      fontWeight: 700,
    },
    h6: {
      fontSize: 20,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
      fontWeight: 500,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontSize: 14,
      fontWeight: 600,
    },
  },
});


export const stepperTheme = createTheme({
  components: {
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderLeft: "2px dashed #2E3133",
          height: "32px",
        },
      },
    },
  },
});

const modeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => { }
})

export const useModeContext = () => useContext(modeContext)

export const ModeProvider = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    // @ts-ignore
    <modeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </modeContext.Provider>
  )
}

