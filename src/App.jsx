import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LandPage from "./layout/landpage";
import Footer from "./components/Footer";
import NavBar from "./components/navBar";
import SignIn from "./layout/authentication";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/signIn" element={<SignIn />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
