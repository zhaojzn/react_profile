import Header from "./components/Header";
import About from "./sections/About";
import NavProvider from './context/NavContext'
import Projects from "./sections/Projects";

function App() {
  return (
    <div>
      <NavProvider>
        <Header />
        <About />
        <Projects />
      </NavProvider>
    </div>
  );
}

export default App;
