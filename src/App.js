import Navbar from "./components/NavBar/Navbar";
import Introduction from "./components/Intro/Introduction";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Works/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
