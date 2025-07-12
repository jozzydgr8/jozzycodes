import { Features } from "./component/Features"
import { Header } from "./component/Header"
import { Help } from "./component/Help"
import { Logo } from "./component/Logo"
import { Philosophy } from "./component/Philosophy"
import { Reason } from "./component/Reason"
import { Services } from "./component/Services"
import { advertisement } from "../shared/Types"
import { Footer } from "../shared/Footer"

export const Home = ({advertisement}:advertisement)=>{
    return(
        <>
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