import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAutor] = useState ('');
    const [isPending, setIsPending] = useState (false);
    const history = useHistory ();

    const handSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author};
        setIsPending (true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1)
            history.push('/')
        })

    }

    return (
        <div className="create">
            <h2>Add new Blog</h2>
            <form onSubmit={handSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog title:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <labale>Blog author: </labale>
                <select
                    value={author}
                    onChange={(e) => setAutor(e.target.value)}
                    >
                    <option value="Ibrah"></option>
                    <option value="Hima"></option>
                    <option value="Bah"></option>
                </select>
                {!isPending && <button>Add Blog</button>}                
                {isPending && <button disabled>Adding Blog...</button>}
                
                {/* <p>{author}</p> */}
            </form>
        </div>
    );
}

export default Create;