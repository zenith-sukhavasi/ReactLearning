import { useState, useEffect } from "react";
import BlogList from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
    const [likes, setlikes] = useState(50)
    const [name, setName] = useState("mario");
    console.log(name)
    // [
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]
    const { data: blogs, error, isLoading, handleDelete } = useFetch(" http://localhost:8000/blogs   ")
    function blogger(b) {
        (
            <div className="blog-preview" key={b.id}>
                <h2>{b.title}</h2>
                <p>author is{b.author}</p>
            </div>
        )
    }
    const handleclick = () => {
        setlikes(likes + 1)
    }
    // const handleDelete = (id)=>{
    //     const newBlogs = blogs.filter(blog=>blog.id!==id)
    //     setBlogs(newBlogs)
    // }
    useEffect(() => {
        console.log("ran")
        //setlikes(likes+1)
        console.log(blogs)
    }, [blogs])
    // useEffect(()=>alert(name),[name])
    // const handleclickA = (h,e)=>{
    //     console.log(h,e.target)    }
    return (
        <div className="Home">

            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}></BlogList>}

            {error && <div>{error}</div>}
            {isLoading && <div className="loading">is loading .....</div>}
            {blogs &&
                <div className="select">
                    <label >Search By Author:</label>
                    <select value={name} onChange={(e) => { setName(e.target.value) }} >
                        <option value="mario" >mario</option>
                        <option value="luigi" >Luigi</option>
                        <option value="yoshi" >Yoshi</option>
                    </select>
                </div>}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === name)} handleDelete={handleDelete} title={name + "'s Blogs"} />}
            {/* <button onClick={handleclick}>like</button>
            <p>{likes}</p> */}
            {/* <button onClick={()=>{setName("luigi")}} >Change name</button>
            <p>{name}</p> */}
            {/* <button onClick={(e)=>handleclickA("home",e)}>Click</button> */}
            {/* {blogs.map((blog)=>blogger(blog))} */}
        </div>
    );
}

export default Home;
