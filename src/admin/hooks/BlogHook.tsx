import { toast } from "react-toastify";
import { blogType } from "../../shared/Types";
import { UseDataContext } from "../../context/UseDataContext";
import { UseAuthContext } from "../../context/UseAuthContext";

export const BlogHook = ()=>{
    const {dispatch} = UseDataContext();
    const {user} = UseAuthContext();
    const postBlog = async({title, description}:blogType)=>{
        const slugify = (title: string): string => {
            return title
                .toLowerCase() // convert to lowercase
                .trim() // remove whitespace from both ends
                .replace(/[^a-z0-9\s-]/g, '') // remove non-alphanumeric chars (except spaces and hyphens)
                .replace(/\s+/g, '-') // replace spaces with hyphens
                .replace(/-+/g, '-'); // collapse multiple hyphens
            };
            const post = {
            title:title,
            description:description,
            slug:slugify(title)
            }

        try{
            const response = await fetch('https://jozzcodesserver.vercel.app/blog',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${user?.token}`
                },
                body:JSON.stringify(post)
            });
            if(!response.ok){
                throw Error('an error occured');
            }
            const json = await response.json();
            toast.success('blog posted succesfully');
            dispatch({type:'addBlog', payload:json});
        }catch(error){
            console.error(error);
            toast.error('error posting blog')
        }
    }

    const deleteBlog = async(id:string)=>{
        try{
            const response = await fetch (`https://jozzcodesserver.vercel.app/blog/${id}`,{
                method:'delete',
                headers:{
                    'Authorization':`Bearer ${user?.token}`
                }
            })
            if(!response.ok){
                throw Error('error deleting blog')
            } 
            const json = await response.json();
            dispatch({type:"deleteBlog", payload:json._id});
            toast.success('blog deleted succesfully')
        }catch(error){
            console.error(error);
            toast.error('an error occured deleting blog')
        }
    }

    return {postBlog, deleteBlog}
}