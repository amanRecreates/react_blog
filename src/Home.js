import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

   const [blogs, setBlogs] = useState(null)

   const handleDelete = (id) => {
       const newBlogs = blogs.filter(blog => blog.id !== id)
       setBlogs(newBlogs)
   }

   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   
   useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch the data from the specified resource')
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setLoading(false)
                setError(null)
            })
            .catch(err => {
                setLoading(false)
                setError(err.message)
            })
   }, [])
   
    return (
        <div className="home">
            { loading && <div> Loading ... </div>}
            { error && <div> {error} </div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} /> }
        </div>
    );
}
 
export default Home;