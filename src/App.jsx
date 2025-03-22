import React, { useState } from "react";
import Navbar from "./Ui/Navbar";
import MobileMenu from "./Ui/MobileMenu";
import LoadScreen from "./Ui/LoadScreen";
import Home from "./section/Home";
import AnimationWaves from "./Ui/AnimationWaves";
import About from "./section/About";
import Projects from "./section/Project";
import { Contact } from "./section/Contact";
import RevealOnScroll from "./Ui/RevealOnScroll";
import Footer from "./section/Footer";

function App(){
  const[isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return(
    <div class="absolute -z-10 min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {!isLoading &&( <LoadScreen onComplete={()=> setIsLoading(true)}/>)}
      <Navbar isMenuOpen={ isMenuOpen } setIsMenuOpen={setIsMenuOpen}/>
      <MobileMenu isMenuOpen={ isMenuOpen } setIsMenuOpen={setIsMenuOpen} />
      <RevealOnScroll>
      <Home/>
      <AnimationWaves />
      </RevealOnScroll>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;