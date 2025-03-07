import { Outlet } from "react-router-dom"
import { Navbar } from "./Components/Navbar"
import { useEffect, useState } from "react"
import { SocialIcon } from "./Components/SocialIcon";
import { Footer } from "./Pages/Footer";
import { Modal } from "./Components/Modal";

export const Layout = ()=>{
    const [isModalOpen, setIsModalOpen]= useState(false);
    useEffect(() => {
        // Check if modal has been shown before
        const hasSeenModal = localStorage.getItem("hasSeenModal");
    
        if (hasSeenModal) {
          // Show modal after 3 seconds
          const timer = setTimeout(() => {
            setIsModalOpen(true);
            localStorage.setItem("hasSeenModal", "true"); // Cache modal display
          }, 3000);
    
          // Cleanup timeout on unmount
          return () => clearTimeout(timer);
        }
      }, []);
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
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <Navbar clicked={darkTheme} onClick={toggletheme}/>
        <Outlet/>
        <a className='whatsappIcon' href='https://wa.link/b8xq56' target='_blank'>
            <img  src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="whatsapp icon"/> chat us now
        </a>
        <Footer />
        </>
    )
}