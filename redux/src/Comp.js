import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost } from "./redux/Slices/users";
import { nanoid } from '@reduxjs/toolkit';
import { handleDeletePost } from "./redux/sagas/handlers/posts";

const Test = () => {
    const Dispatch = useDispatch()
    const posts = useSelector((state) => state.user.posts)
    console.log("state posts", posts)
    const [text, setText] = useState('ds')
    const url = 'https://my-json-server.typicode.com/typicode/demo/posts'
    const fetchData2 = () => {
        return axios
            .get(url)
            .then((res) => {
                // setLoading(false);
                console.log(res)
                console.log(res.data)
                return res;
            })
            .catch((err) => {
                console.error(err);
            });
    };
    const fetchData = () => {
        return axios
            .post(url, {
                id: 4,
                title: "Post 8"
            })
            .then((res) => {
                // setLoading(false);
                console.log("post", res)
                console.log("post", res.data)
                return res;
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        // fetchData()
    }, [])

    // var data = {
    //     a:{"0": "1"},
    //     b:{"1": "2"},
    //     c:{"2": "3"},
    //     d:{"3": "4"}
    // };

    // const myData = Object.keys(data).map(key => {
    //     return data[key];
    // })
    // console.log("array",myData)
    const handleDelete = (id) => {
        if (window.confirm('are you sure you want to delete this')) {
            Dispatch(deletePost(id))
        }
    }
    return (<div className="test">
        <p>post text</p>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => Dispatch(addPost({ id: nanoid(), title: text }))} > add post</button>
        {posts.map((post) => (
            <div className="post">
                <h1>{post.title}</h1>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
        )
        )}
    </div>);
}

export default Test;