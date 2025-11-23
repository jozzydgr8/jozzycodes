import { Helmet } from "react-helmet-async";
import {IkejaHeader} from '../component/IkejaHeader'
import { Services } from "../component/Services";
import { PortfolioMarquee } from "../component/PortfolioMarquee";
import { Reason } from "../component/Reason";
import { GoogleReviews } from "../component/GoogleReviews";
import { Logo } from "../component/Logo";
import { Help } from "../component/Help";
import { Footer } from "../../shared/Footer";
import { getBasePath } from "../../shared/getBasePath";
import { useLocation } from "react-router-dom"

export const Ikeja = ()=>{
    const location = useLocation()
    const basePath = getBasePath(location.pathname)
    return(
        <>
         <Helmet>
            <meta 
              name="description"
              content="Hire a professional website developer in Ikeja. We build fast, modern, and responsive websites tailored to your business goals — from e-commerce stores to corporate websites. Get a high-converting, custom-built website designed to grow your brand online."
            />
        
            <link 
              rel="canonical" 
              href={`https://jozzycodes.com${basePath}/website-developer-in-ikeja`} 
            />
        
            <title>
              Jozzycodes – Website Developer in Ikeja | Professional Web Design, E-Commerce & Business Websites 
            </title>
        </Helmet>
        
               <IkejaHeader/>
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