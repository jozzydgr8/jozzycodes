import { Outlet } from "react-router-dom"
import { Navbar } from "./shared/Navbar"
import { SocialIcon } from "./shared/SocialIcon";
import ScrollToTop from "./shared/ScrollToTop";
import { GeoRedirector } from "./shared/GeoRedirector";


type layout = {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const Layout = ({setLoading}:layout)=>{
    
    return(
        <>
        
        {/* <GeoRedirector setLoading={setLoading} /> */}
        <ScrollToTop/>
        <SocialIcon/>
        <Navbar/>
        <Outlet/>
        <a className='whatsappIcon' href='https://wa.link/ubp14t' target='_blank'>
            <img  src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="whatsapp icon"/> chat us now
        </a>
       
        </>
    )
}