import axios from "axios";



export function requestGetPosts() {
  return axios.request({
    method: "get",
    url:'http://localhost:8000/posts'
   // url: 'https://my-json-server.typicode.com/typicode/demo/posts'
  });
}

export function requestGetPost(data) {
  console.log('payload', data);
  const url = 'http://localhost:8000/posts' + '/' + data
  //const url = 'https://my-json-server.typicode.com/typicode/demo/posts' + '/' + data
  return axios.request({
    method: "get",
    url: url,
  });
}

export function requestAddPost(data) {
  console.log('payload', data);
  const url = 'http://localhost:8000/posts'
  //const url = 'https://my-json-server.typicode.com/typicode/demo/posts'
  return axios
    .post(url, data)
}

export function requestDeletePost(id) {
  console.log('id', id);
  const url = 'http://localhost:8000/posts'+ '/' + id
  return axios
    .delete(url)
}
