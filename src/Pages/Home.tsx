import { Features } from "./component/Features"
import { Header } from "./component/Header"
import { Help } from "./component/Help"
import { Logo } from "./component/Logo"
import { Philosophy } from "./component/Philosophy"
import { Reason } from "./component/Reason"
import { Services } from "./component/Services"
import { advertisement } from "../shared/Types"
import { Footer } from "../shared/Footer"
import { Helmet } from "react-helmet"
import { getBasePath } from "../shared/getBasePath"
import { useLocation } from "react-router-dom"

export const Home = ({advertisement}:advertisement)=>{
    const location = useLocation()
    const basePath = getBasePath(location.pathname)
    return(
        <>
        <Helmet>
            <meta name="description"
            content="We build responsive, brand-first websites tailored to your goals. Built from scratch to stand out, perform, and grow with your business."/>
            <link rel="canonical" href={`https://jozzycodes.com${basePath}`}/>
            <title>Jozzycodes – Website Services | E-Commerce & Business Websites | Ongoing Discount | Claim Deal</title>
        </Helmet>
        <Header/>
        <Services />
        <Features advertisement={advertisement}/>
        <Philosophy/>
        <Reason/>
        <Logo/>
        <Help/>
        <Footer/>
       
        </>
    )
}