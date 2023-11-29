import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Introduction from "./components/Intro/Introduction";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Works/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const switchtheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  
 
  return (
    <div className="App" data-theme={theme}>
      <Navbar switchTheme={switchtheme}/>
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
