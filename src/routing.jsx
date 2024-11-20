import { Routes,Route } from "react-router-dom";
import Home from "./component/home";
import Card from "./component/card";
import About from "./component/about";
import { ContactUs } from "./component/contact";
function Routing() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Card />} />  
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            </Routes>
    )
}
export default Routing;