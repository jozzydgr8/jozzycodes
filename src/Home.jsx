import { Header } from "./Pages/Header"
import { Help } from "./Pages/Help"
import { Logo } from "./Pages/Logo"
import { Philosophy } from "./Pages/Philosophy"
import { Reason } from "./Pages/Reason"
import { Services } from "./Pages/Services"

export const Home = ()=>{
    return(
        <>
        <Header/>
        <Services />
        <Philosophy/>
        <Reason/>
        <Logo/>
        <Help/>
       
        </>
    )
}