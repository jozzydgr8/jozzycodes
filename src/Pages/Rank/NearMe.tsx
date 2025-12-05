import { Helmet } from "react-helmet-async";
import { getBasePath } from "../../shared/getBasePath";
import { useLocation } from "react-router-dom";
import { Services } from "../component/Services";
import { PortfolioMarquee } from "../component/PortfolioMarquee";
import { Reason } from "../component/Reason";
import { GoogleReviews } from "../component/GoogleReviews";
import { Logo } from "../component/Logo";
import { Help } from "../component/Help";
import { Footer} from "../../shared/Footer";
import { NearMeHeader } from "../component/NearMeHeader";
export const NearMe = ()=>{
    const location = useLocation()
    const basePath = getBasePath(location.pathname)
    return(
        <>
        <Helmet>
            <meta 
                name="description"
                content="Hire a professional website developer near you. We create modern, responsive, and high-converting websites for local businesses — including e-commerce stores, corporate sites, and custom web solutions designed to grow your brand online."
            />

            <link 
                rel="canonical" 
                href={`https://jozzycodes.com${basePath}/website-developer-near-me`} 
            />

            <title>
                Jozzycodes – Website Developer Near You | Professional Web Design & Business Websites
            </title>
        </Helmet>

            <NearMeHeader/>
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