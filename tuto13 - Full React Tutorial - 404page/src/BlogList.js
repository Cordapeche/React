import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((theblogs) => (
                <div className="blog-preview" key={theblogs.id}>
                    <Link to={`/blogs/${theblogs.id}`}>
                        <h2>{theblogs.title}</h2>
                        <p> Written by {theblogs.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;


