import react from "react";
import AppSection from "./AppSection";
import CardSection from "./Cardsection";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./Navbar"

let App = ()=>{
  return(
    <div>
      
      <NavBar/> 
      <Hero/>
    
      <CardSection/>
        <AppSection/>
      <Footer/>
    </div>
  )
}

export default App;