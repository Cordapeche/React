import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'Fist post', body: 'lorem impsum..', author: 'Ibrah', id: 1},
    {title: 'second post', body: 'lorem impsum..', author: 'hima', id: 2},
    {title: 'third post', body: 'lorem impsum..', author: 'bah', id: 3}
  ]);



  return (
    <div className="home">
    <BlogList blogs={blogs} title="all blogs!"/>
    <BlogList blogs={blogs.filter((blog) => blog.author === 'Ibrah')} title="Ibrah's Blogs"/>
    </div>
  );
}
 
export default Home;