import { toast } from "react-toastify";
import { blogType } from "../../shared/Types";
import { UseDataContext } from "../../context/UseDataContext";
import { UseAuthContext } from "../../context/UseAuthContext";

export const BlogHook = ()=>{
    const {dispatch} = UseDataContext();
    const {user} = UseAuthContext();
    const postBlog = async({title, description, sections}:blogType)=>{
    function slugify(title: string): string {
        const stopWords = new Set([
            'a', 'an', 'the', 'and', 'or', 'in', 'on', 'for',
            'of', 'with', 'to', 'is', 'why', 'how', 'this', 'that', 'are', 'was', 'be'
        ]);

        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters (except spaces and hyphens)
            .split(/\s+/) // Split by spaces
            .filter(word => word && !stopWords.has(word)) // Remove empty strings and stop words
            .slice(0, 6) // Limit to first 6 meaningful words (adjust for length preference)
            .join('-') // Join with hyphens
            .replace(/-+/g, '-') // Collapse multiple hyphens
            .replace(/^-+|-+$/g, ''); // Trim hyphens from start/end
        }

            const post = {
            title:title,
            description:description,
            slug:slugify(title),
            sections:sections,
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