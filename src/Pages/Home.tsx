
import { Header } from "./component/Header"
import { Help } from "./component/Help"
import { Logo } from "./component/Logo"
import { Reason } from "./component/Reason"
import { Services } from "./component/Services"
import { Footer } from "../shared/Footer"
import { Helmet } from "react-helmet-async"
import { getBasePath } from "../shared/getBasePath"
import { useLocation } from "react-router-dom"
import { GoogleReviews } from "./component/GoogleReviews"
import { PortfolioMarquee } from "./component/PortfolioMarquee"

export const Home = ()=>{
    const location = useLocation()
    const basePath = getBasePath(location.pathname)
    return(
        <>
        <Helmet>
            <meta name="description"
            content=" Websites built to perform - anywhere in the world"/>
            <link rel="canonical" href={`https://jozzycodes.com${basePath}`}/>
            <title>Jozzycodes</title>
        </Helmet>
        <Header/>
        <Services />
    
        <PortfolioMarquee/>
        <Reason/>
        <GoogleReviews/>
        <Logo/>
        <Help/>
        <Footer/>
       
        </>
    )
}