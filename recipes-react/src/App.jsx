import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recipes/:id" element={<Recipes />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
