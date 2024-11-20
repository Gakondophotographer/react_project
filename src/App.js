import React from "react";
import Nav from "./nav";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing";

function App(){
  return(
   <>
   <BrowserRouter>
   
    <Nav />
<Routing />
   </BrowserRouter>
   </>
  );
}
export default App;