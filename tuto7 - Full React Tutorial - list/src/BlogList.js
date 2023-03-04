const BlogList = ({blogs, title, handleDelete}) => {

    return (
        <div className="blog-list">
            
        <h2>{title}</h2>
            {blogs.map((theblogs) => (
        <div className="blog-preview" key={theblogs.id}>
          <h2>{ theblogs.title}</h2>
          <p> { theblogs.body}</p>
          <p> Written by { theblogs.author}</p>
          
          </div>
      ))}
      </div>
    );
}

export default BlogList;