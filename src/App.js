import './Reset.css';

import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
        <Home />
        <Skills />
        <Work />
        <Experience />
        <Contact />
    </div>
  );
}

export default App;
