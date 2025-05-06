import React from "react";
import App from "../App";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Steps from "../components/Steps";
import Features from "../components/Features";
import Footer from "../components/Footer";

function HomePage(){
   
    return(
       <>
        <Navbar />
        <HeroSection />
        < Steps />
        < Features />
        <Footer />
       </>

    )
    
   
}

export default HomePage