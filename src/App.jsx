import { Route, Routes } from "react-router-dom";
import "./App.css";
import SplashScreen from "./components/SplashScreen";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
      </Routes>
    </>
  );
}

export default App;
