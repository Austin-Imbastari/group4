import { Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import AuthPage from "./pages/auth/AuthPage";
import NavBar from "./components/NavBar";
import { theme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/GlobalStyle";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
      </Routes>
      <EventDetails/>
    </ThemeProvider>
  );
}

export default App;
