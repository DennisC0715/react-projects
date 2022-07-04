import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Error from "./page/Error";
import CocktailPage from "./page/CocktailPage";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/error" element={<Error />} />
        <Route exact path="/cocktail/:id" element={<CocktailPage />} />
      </Routes>
    </>
  );
}

export default App;
