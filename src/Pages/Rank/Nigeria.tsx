import { Helmet } from "react-helmet-async";
import { getBasePath } from "../../shared/getBasePath";
import { useLocation } from "react-router-dom";
import { Services } from "../component/Services";
import { PortfolioMarquee } from "../component/PortfolioMarquee";
import { Reason } from "../component/Reason";
import { GoogleReviews } from "../component/GoogleReviews";
import { Logo } from "../component/Logo";
import { Help } from "../component/Help";
import { Footer } from "../../shared/Footer";
import { NigeriaHeader } from "../component/NigeriaHeader";
export const Nigeria = ()=>{
    const location = useLocation()
    const basePath = getBasePath(location.pathname)
    return(
        <>
        <Helmet>
            <meta 
            name="description"
            content="Hire a professional website developer in Nigeria. We build modern, responsive, and high-converting websites for businesses nationwide — including e-commerce stores, corporate websites, and custom web solutions designed to grow your brand online."
            />

            <link 
            rel="canonical" 
            href={`https://jozzycodes.com${basePath}`} 
            />

            <title>
            Jozzycodes – Website Developer in Nigeria | Professional Web Design, E-Commerce & Business Websites
            </title>
        </Helmet>
            <NigeriaHeader/>
            <Services/>
            <PortfolioMarquee/>
            <Reason/>
            <GoogleReviews/>
            <Logo/>
            <Help/>
            <Footer/>
           
        </>
        
    )
}