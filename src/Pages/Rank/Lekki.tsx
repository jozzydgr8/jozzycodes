import { Helmet } from "react-helmet-async";
import {LekkiHeader} from '../component/LekkiHeader'
import { Services } from "../component/Services";
import { PortfolioMarquee } from "../component/PortfolioMarquee";
import { Reason } from "../component/Reason";
import { GoogleReviews } from "../component/GoogleReviews";
import { Logo } from "../component/Logo";
import { Help } from "../component/Help";
import { Footer } from "../../shared/Footer";
import { getBasePath } from "../../shared/getBasePath";
import { useLocation } from "react-router-dom"

export const Lekki = ()=>{
    const location = useLocation()
    const basePath = getBasePath(location.pathname)
    return(
        <>
         <Helmet>
            <meta 
              name="description"
              content="Hire a professional website developer in Lekki. We build fast, modern, and responsive websites tailored to your business goals — from e-commerce stores to corporate websites. Get a high-converting, custom-built website designed to grow your brand online."
            />
        
            <link 
              rel="canonical" 
              href={`https://jozzycodes.com${basePath}`} 
            />
        
            <title>
              Jozzycodes – Website Developer in Lekki | Professional Web Design, E-Commerce & Business Websites 
            </title>
        </Helmet>
        
               <LekkiHeader/>
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