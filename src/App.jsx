import { Route, Routes } from "react-router-dom";
import CreateEvent from "./pages/create_event/CreateEvent";
import SplashScreen from "./pages/SplashScreen/SplashScreen";
import AboutUs from "./pages/AboutUs/AboutUs";
import AuthPage from "./pages/auth/AuthPage";
import NavBar from "./components/navbar/NavBar";
import AllEvents from "./pages/all_events/AllEvents";
import { theme } from "./theme/Theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/GlobalStyle";
import EventDetails from "./pages/event_details/EventDetails";
import { AuthProvider } from "./context/AuthContext";
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar />
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/events" element={<AllEvents />} />
          <Route path="/auth/*" element={<AuthPage />}>
            <Route index element={<SignInForm />} />
            <Route path="signin" element={<SignInForm />} />
            <Route path="signup" element={<SignUpForm />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
