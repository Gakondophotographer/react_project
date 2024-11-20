import { Routes,Route } from "react-router-dom";
import Home from "./component/home";
import Card from "./component/card";
import About from "./component/about";
function Routing() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Card />} />  
            <Route path="/about" element={<About />} />
            </Routes>
    )
}
export default Routing;