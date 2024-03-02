// import { ThemeProvider } from "@mui/material";
import "./App.css";
// import CreditNote from "./pages/CreditNote/CreditNote";
// import { darkTheme, lightTheme, useModeContext } from "./themes.tsx";
import CustomHeaderFilterSingleDataGridPro from "./components/demo.js";
import React, { Component } from "react";

// function App() {
//   const mode = useModeContext();

//   const theme = mode.darkMode ? darkTheme : lightTheme;
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* // // <ThemeProvider theme={theme}>
      // //   <CreditNote />
      // // </ThemeProvider> */}
        <CustomHeaderFilterSingleDataGridPro />
      </div>
    );
  }
}

export default App;
