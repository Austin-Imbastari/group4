import { Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Login from "./pages/login/Login";
import NavBar from "./components/NavBar";
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
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
