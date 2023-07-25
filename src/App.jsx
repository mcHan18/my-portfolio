import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./shared/Footer";
// import Map from "./components/Map";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      {/* <Map /> */}
      <Footer />
    </>
  );
}

export default App;
