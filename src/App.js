import Navbar from "./components/NavBar/Navbar";
import Introduction from "./components/Intro/Introduction";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Works/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
