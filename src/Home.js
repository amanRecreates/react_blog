import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

   const [blogs, setBlogs] = useState([
       { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
       { title: 'Welcome Party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
       { title: 'Web Dev Tool Tips', body: 'lorem ipsum...', author: 'mario', id: 3},
   ])

   const handleDelete = (id) => {
       const newBlogs = blogs.filter(blog => blog.id !== id)
       setBlogs(newBlogs)
   }

   const [name, setName] = useState('mario')
   
   useEffect(() => {
       console.log('UseEffect is ran')
       console.log(name)
   }, [name])
   
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;