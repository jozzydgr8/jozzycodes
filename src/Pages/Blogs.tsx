import { NavLink, useLocation } from "react-router-dom";
import { UseDataContext } from "../context/UseDataContext"
import { FlatButton } from "../shared/FlatButton";
import {RightCircleOutlined} from '@ant-design/icons'
import { FormatDate } from "../shared/FormatDate";
import { getBasePath } from "../shared/getBasePath";
import { Helmet } from "react-helmet-async";
import { LoopText } from "./component/LoopText";

export const Blog = ()=>{
    const location = useLocation()
    const {blog} = UseDataContext();
    const basePath = getBasePath(location.pathname)
    const Styles = {
        content:{
            display:'flex',
            alignItems:"center",
            gap:'5px'
        }
    }
    const loopTexts =[
        "Insights you didn't know you needed",
        "Answers to your questions"
    ]
    return(
        <>
        <Helmet>
            <title>Jozzy Codes Blog | Insights on Custom Website Development & Design</title>
            <link rel='canonical' href={`https://jozzzycodes.com${basePath}/blog`}/>
            <meta
                name="description"
                content="Read the latest articles, tips, and trends on custom website development, design, and digital branding from Jozzy Codes."
            />
        </Helmet>

        <section className="linearbackground">
            <div className="container-fluid">
              <h1 style={{fontSize:"30px", color:'#577BC1'}}>
                              Articles
                              </h1>
                              <LoopText loopTexts={loopTexts} as="h1" style={{fontSize:"30px",textAlign:"left"}}/>
                              <br/>
                {
                    blog && blog.map(blog=>(
                        <div key={blog._id} className="blogcontent">
                            <h3>{blog.title}</h3>
                            <p>{blog.description.slice(0,100)}...</p>

                            <div style={Styles.content}>
                                <ion-icon name="calendar-clear-outline"></ion-icon>
                                <div>
                                    {blog?.updatedAt ? FormatDate(blog.updatedAt) : ""}
                                </div>
                            </div>


                            <div style={Styles.content}>
                                <ion-icon name="person-outline"></ion-icon>
                                <div>
                                    {blog.author}
                                </div>
                            </div>
                           <NavLink to={`${basePath}/blog/${blog.slug}`}>
                            <FlatButton title="Read More" className="btnalternate" icon={<RightCircleOutlined/>}/>
                           </NavLink>
                        </div>
                    ))
                }
            </div>
        </section>
        </>
    )
}