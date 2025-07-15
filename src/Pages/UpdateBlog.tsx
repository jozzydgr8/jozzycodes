import { useParams } from "react-router-dom"
import { UseDataContext } from "../context/UseDataContext";

import { FlatButton } from "../shared/FlatButton";
import { FormatDate } from "../shared/FormatDate";
import { BlogHook } from "../admin/hooks/BlogHook";

const Styles = {
        content:{
            display:'flex',
            alignItems:"center",
            gap:'5px'
        }
    }
export const UpdateBlog = ()=>{
    const {id} = useParams();
    const {blog} = UseDataContext();
    const {deleteBlog} = BlogHook();
    const featured = blog && blog.find(featured => featured._id === id);
    
    return(
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
                { featured?._id && (
                <FlatButton
                    title="Delete"
                    className="btn-dark"
                    onClick={() => deleteBlog(featured._id!)}
                />
                )}
            </div>
            
            </div>
        </section>
    )
}