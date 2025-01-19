import { Outlet } from "react-router-dom"
import { Navbar } from "./Components/Navbar"
import { useState } from "react"
import { SocialIcon } from "./Components/SocialIcon";
import { Footer } from "./Pages/Footer";

export const Layout = ()=>{
    const [darkTheme, setDarkTheme] = useState(false);
    const toggletheme = () => {
        setDarkTheme(prevState => {
            const newState = !prevState;
            document.body.classList.toggle('dark-theme', newState);
            return newState;
        });
    }
    
    return(
        <>
        <SocialIcon/>
        <Navbar clicked={darkTheme} onClick={toggletheme}/>
        <Outlet/>
        <a className='whatsappIcon' href='https://wa.link/b8xq56' target='_blank'>
            <img  src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="whatsapp icon"/> chat us now
        </a>
        <Footer />
        </>
    )
}