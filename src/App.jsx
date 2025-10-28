import { Route, Routes } from "react-router-dom";
import CreatePost from "./pages/create_post/CreatePost";
import AuthPage from "./pages/auth/AuthPage";
import NavBar from "./components/navbar/NavBar";
import AllEvents from "./components/AllEvents";
import { theme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/GlobalStyle";
import EventDetails from "./pages/event_details/EventDetails";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <Routes>
        {<Route path="/create-post" element={<CreatePost />} />}
        {<Route path="/auth" element={<AuthPage />} />}
        {<Route path="/events/:id" element={<EventDetails />} />}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
