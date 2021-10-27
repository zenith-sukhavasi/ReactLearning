import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const history = useHistory()
    const{id : ln}=useParams()
    const { data:blog,isPending,error}= useFetch("http://localhost:8000/blogs/"+ln)
    const handleDelete =()=>{
        fetch(" http://localhost:8000/blogs/"+blog.id,{
            method:"Delete"

        }).then(()=>{
            history.push("/")
        })
    }
    return (  
        <div className="blog_details">
       {isPending && <div>Loading....</div>}
       {error && <div> {error.message}</div> }
       {blog && <article>
           <h2>{blog.title}</h2>
           <p>Written by {blog.author}</p>
           <div>{blog.body}</div>
           <button onClick={handleDelete}>Delete</button>
           </article>}
       </div>
    );
}
 
export default BlogDetails;