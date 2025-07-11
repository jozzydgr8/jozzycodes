import { Features } from "./Components/Features"
import { Header } from "./Pages/Header"
import { Help } from "./Pages/Help"
import { Logo } from "./Pages/Logo"
import { Philosophy } from "./Pages/Philosophy"
import { Reason } from "./Pages/Reason"
import { Services } from "./Pages/Services"
import { advertisement } from "./Types"

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
       
        </>
    )
}