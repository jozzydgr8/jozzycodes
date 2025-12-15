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
import { AgencyHeader } from "../component/AgencyHeader";
export const Affordable = ()=>{
    const location = useLocation()
        const basePath = getBasePath(location.pathname)
    return(
        <>
        <Helmet>
            <meta 
            name="description"
            content="We build responsive, brand-first websites tailored to your goals. Built from scratch to stand out, perform, and grow with your business."
            />

            <link 
            rel="canonical" 
            href={`https://jozzycodes.com${basePath}/premium-website-design`} 
            />

            <title>
            Premium Website Development Service for Brands
            </title>
        </Helmet>
            <AgencyHeader/>
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