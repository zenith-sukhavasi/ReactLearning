import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'


export const postsAdapter = createEntityAdapter();
export const postsSelectors = postsAdapter.getSelectors((state) => state.posts);


export const users = createSlice({
  name: 'user',
  initialState: {
    user: {
      Firstname: "zenith",
      Lastname: "Sukhavasi",
      Email: "sukhavasi@gmail.com",
      Mobile: 9133677038,
      picture: "..\src\Images\images.jpeg"
    },
    posts: []
  },
  reducers: {
    modifyUser(state, action) {
      //state.user={...state.user,action.payload}
      state.user = { ...state.user, ...action.payload }
    },
    getPosts() { },
    getPost(state, action) {

    },
    setPosts(state, action) {
      console.log("state is", action.payload)
      if (action.payload.id) {
        console.log("single object")
        state.posts = [ action.payload,...state.posts]
        console.log("sss", state.posts)
      }
      else {
        const myData = Object.keys(action.payload).map(key => {
          return action.payload[key];
        })
        console.log("data", myData)
        state.posts = [...myData,...state.posts ]
      }

      //   const myData = Object.keys(action.payload).map(key => {
      //     return action.payload[key];
      // })
      // console.log("data",myData)


      // if(state.posts[0])
      // state.posts=[...state.posts[0],action.payload]
      // else
      //  state.posts=[...state.posts,...myData]
      // arr:[...state.posts,action.payload]
      console.log("settedPosts", state.posts)
      // state.posts= state.posts[0].push( action.payload)
      //state.posts.concat( action.payload)
      console.log("settedPosts", state.posts)
      console.log("action.payload", action.payload)
      return state
    },

    setAllposts(state, action){
      console.log("setAllPosts", action.payload)
      state.posts= [...action.payload]
    },

    addPost(state, action) {
      console.log("addPost triggered")
     
    },
      SetAddPost:postsAdapter.addOne,
    // setAddPost(state, action) {

    // },
    deletePost(state, action) {},
  },
 
})

// Action creators are generated for each case reducer function
export const { modifyUser, getPosts, setPosts, getPost, addPost,SetAddPost,deletePost,setAllposts } = users.actions

export default users.reducer