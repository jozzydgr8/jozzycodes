import { NavLink, useNavigate, useParams } from "react-router-dom"
import { UseDataContext } from "../context/UseDataContext";
import Marquee from "react-fast-marquee";
import { FlatButton } from "../shared/FlatButton";
import { FormatDate } from "../shared/FormatDate";
import { Helmet } from "react-helmet-async";

const Styles = {
        content:{
            display:'flex',
            alignItems:"center",
            gap:'5px'
        }
    }
export const FeaturedBlog = ()=>{
    const {slug} = useParams();
    const {blog} = UseDataContext();
    const featured = blog && blog.find(featured => featured.slug === slug);
    
    return(
        <>
        <Helmet>
        <title>{featured?.title} | Jozzy Codes Blog</title>
        <meta
            name="description"
            content={featured?.description ? featured.description.slice(0, 150) : "Read this insightful blog featured from Jozzy Codes."}
        />
        </Helmet>

        <section>
            <div className="container-fluid">
                <h4>Featured</h4>
                <div className="blogcontent">
                
                <h3>{featured?.title}</h3>
                <p>{featured?.description}</p>
                <div style={Styles.content}>
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <div>
                       {featured?.updatedAt ? FormatDate(featured.updatedAt) : ""}

                    </div>
                </div>


                <div style={Styles.content}>
                    <ion-icon name="person-outline"></ion-icon>
                    <div>
                        {featured?.author}
                    </div>
                </div>

                </div>

            <div>
                <h2>More Content</h2>
                    <Marquee>
                        {
                            blog && blog.map((blog, index)=>(
                                <div key={index} >
                                    <div className="blogcontainer">
                                        
                                        <h4 style={{textTransform:"capitalize"}}>
                                            {blog.title}
                                        </h4>
                                        <p>{blog.description.slice(0,20)}...</p>
                                        <div>
                                            <NavLink to={`/blog/${blog.slug}`}><FlatButton title="View Article" className="btnalternate"/></NavLink>
                                        </div>
                                    </div>
                                
                                </div>
                            ))
                            }
                    </Marquee>
            </div>
            </div>


        </section>
        </>
    )
}