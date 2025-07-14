import { NavLink } from "react-router-dom"
import { FlatButton } from "../../../shared/FlatButton"
import Marquee from 'react-fast-marquee'
import { UseDataContext } from "../../../context/UseDataContext"
import styles from '../../admin.module.css';

export const BlogList = ()=>{
    const {blog} = UseDataContext();
    return(
        <>
        <div>
            
            <Marquee>
            
            {
            blog && blog.map((blog, index)=>(
                <div key={index} >
                    <div className={styles.productcontainer}>
                        
                        <h3>
                            {blog.title}
                        </h3>
                        <div>
                            <NavLink to={`/admin_jctbdil1$/blog/${blog._id}`}><FlatButton title="View Blog" className="btndark"/></NavLink>
                        </div>
                    </div>
                   
                </div>
            ))
            }

        </Marquee>

            
            <NavLink to={'/admin_jctbdil1$/blog/addblog'}>
            <FlatButton className="btnlight" >
                Add New Blog
            </FlatButton>
            </NavLink>
        </div>
        </>
    )
}