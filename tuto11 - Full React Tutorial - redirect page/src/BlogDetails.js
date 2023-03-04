import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    console.log(useFetch);
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading.. </div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                <h2>{blog.title}</h2>
                <div>{blog.body} </div>
                <h6>Writen by {blog.author} </h6>
                </article>
            )}
        </div>        
     );
}

 
export default BlogDetails;