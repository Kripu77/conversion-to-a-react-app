import React from "react";
import Nav from "./navbar"
import Jumbotron from "./jumbotron";
import Feature from "./feature";
import Stay from "./stay";
import Footer from "./footer";

let App = ()=>{

    return (
        <div> 
            <Nav/>
            <Jumbotron/>
              <Stay/>
            <Feature/>
          
            <Footer/>
        </div>
    )
}
    export default App;