import { Outlet } from "react-router-dom"
import { Navbar } from "./Components/Navbar"
import { useEffect, useState } from "react"
import { SocialIcon } from "./Components/SocialIcon";
import { Footer } from "./Components/Footer";
import ScrollToTop from "./ScrollToTop";
import { GeoRedirector } from "./GeoRedirector";

type layout = {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const Layout = ({setLoading}:layout)=>{
    
    return(
        <>
        <GeoRedirector setLoading={setLoading} />
        <ScrollToTop/>
        <SocialIcon/>
        <Navbar/>
        <Outlet/>
        <a className='whatsappIcon' href='https://wa.link/ubp14t' target='_blank'>
            <img  src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="whatsapp icon"/> chat us now
        </a>
        <Footer />
        </>
    )
}