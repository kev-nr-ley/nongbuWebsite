import Navbar from "./sections/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Footer from "./sections/Footer";
function App() {
  function objectToArray(object) {
    return Object.keys(object).map((key) => {
      return object[key];
    });
  }

  return (
    <>
      <Navbar />
      <Menu objectToArray={objectToArray} />
      {/* <Home /> */}
      <Footer />
    </>
  );
}

export default App;
