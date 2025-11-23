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
import { AffordableHeader } from "../component/AffordableHeader";
export const Affordable = ()=>{
    const location = useLocation()
        const basePath = getBasePath(location.pathname)
    return(
        <>
        <Helmet>
            <meta 
            name="description"
            content="Get affordable website design in Lagos for your business. Professional, modern, and responsive websites at budget-friendly prices — perfect for startups, SMEs, and entrepreneurs looking for quality web design without high costs."
            />

            <link 
            rel="canonical" 
            href={`https://jozzycodes.com${basePath}/affordable-website-design-lagos`} 
            />

            <title>
            Affordable Website Design in Lagos | Budget-Friendly Web Designer for Businesses
            </title>
        </Helmet>
            <AffordableHeader/>
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