import { Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import AuthPage from "./pages/auth/AuthPage";
import NavBar from "./components/NavBar";
import { theme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/GlobalStyle";
import CreatePost from "./CreatePost/CreatePost";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />

      <CreatePost />
      <Routes>{/* <Route path="/" element={<SplashScreen />} /> */}</Routes>
    </ThemeProvider>
  );
}

export default App;
