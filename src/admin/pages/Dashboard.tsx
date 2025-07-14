import { BlogList } from "./component/BlogList"

export const Dashboard = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <BlogList/>
            </div>
        </section>
    )
}