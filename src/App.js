import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Python from "./pages/Python";
import Csharp from "./pages/Csharp";
import JavaScript from "./pages/JavaScript";
import Project361 from "./pages/Project361";
import EvenMoreProjects from "./pages/EvenMoreProjects";
import Background from "./components/Background";
import Footer from "./components/Footer"; // if you created one
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <Router>
      <Background />
      <Navbar />   {/* 👈 Always visible */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/python" element={<Python />} />
        <Route path="/csharp" element={<Csharp />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/project361" element={<Project361 />} />
        <Route path="/evenmoreprojects" element={<EvenMoreProjects />} />
      </Routes>
      <Footer />   {/* 👈 optional */}
    </Router>
  );
}

export default App;
