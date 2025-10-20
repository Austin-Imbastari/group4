import { Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import NavBar from "./components/NavBar";
import AllEvents from "./components/AllEvents";
import { theme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
      </Routes>
      <AllEvents />
    </ThemeProvider>
  );
}

export default App;
