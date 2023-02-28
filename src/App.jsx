import Navbar from "@sections/Navbar";
import Home from "@pages/Home";
import Menu from "@pages/Menu";
import About from "@pages/About";
import Footer from "@sections/Footer";
import Events from "@pages/Events";
function App() {
  function objectToArray(object) {
    return Object.keys(object).map((key) => {
      return object[key];
    });
  }

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Menu objectToArray={objectToArray} /> */}
      <About />
      {/* <Events /> */}
      <Footer />
    </>
  );
}

export default App;
