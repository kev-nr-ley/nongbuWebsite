import Navbar from "@sections/Navbar";
import Home from "@pages/Home";
import Menu from "@pages/Menu";
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
      <Home />

      {/* <Menu objectToArray={objectToArray} /> */}
      <Events />
      <Footer />
    </>
  );
}

export default App;
