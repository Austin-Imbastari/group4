import { Route, Routes } from "react-router-dom";
import CreateEvent from "./pages/create_event/CreateEvent";
import SplashScreen from "./pages/SplashScreen/SplashScreen";
import AboutUs from "./pages/AboutUs/AboutUs";

import AuthPage from "./pages/auth/AuthPage";
import NavBar from "./components/navbar/NavBar";
import AllEvents from "./pages/all_events/AllEvents";
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
        {<Route path="/" element={<SplashScreen />} />}
        {<Route path="/create-event" element={<CreateEvent />} />}
        {<Route path="/auth" element={<AuthPage />} />}
        {<Route path="/events/:id" element={<EventDetails />} />}
        {<Route path="/events" element={<AllEvents />} />}
        <Route path="/createevent" element={<CreatePost />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
