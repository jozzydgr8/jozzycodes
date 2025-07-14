
import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { User } from "./Types"

type proptype={
    user:User | null,
    children: ReactNode
}
export const ProtectedRoutes = ({children, user}:proptype)=>{
    if(!user){
       return <Navigate to={'/admin_jctbdil1$/session'}/>
    }
    return  <>{children}</> 
}