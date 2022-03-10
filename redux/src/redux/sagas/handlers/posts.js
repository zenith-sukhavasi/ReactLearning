
import { call, put } from "redux-saga/effects";
import { setPosts,SetAddPost ,setAllposts, getPosts} from "../../Slices/users";
import { requestGetPost, requestGetPosts,requestAddPost, requestDeletePost } from "../requests/posts";

export function* handlePosts(action) {
  try {
    const response = yield call(requestGetPosts);
    console.log('response is', response);
    const  data  = response.data;
    console.log('data is', data);
    yield put(setAllposts(data ));
  } catch (error) {
    console.log(error);
  }
}

export function* handlePost(action) {
    console.log('action is',action);
    const data = action.payload;
    try {
      const response = yield call(()=>requestGetPost(action.payload));
      console.log('response is', response);
      const  data  = response.data;
      console.log('data is', data);
      yield put(setPosts({ ...data }));
    } catch (error) {
      console.log(error);
    }
  }
  export function* handleDeletePost(action) {
    console.log('action is',action);
    const data = action.payload;
    try {
      const response = yield call(()=>requestDeletePost(action.payload));
      console.log('response is', response);
      const  data  = response.data;
      console.log('data is', data);
      yield put(getPosts());
    } catch (error) {
      console.log(error);
    }
  }

  export function* handleAddPost(action) {
    console.log('post is',action);
    const data = action.payload;
    try {
      const response = yield call(()=>requestAddPost(action.payload));
      console.log('response is', response);
      const  data  = response.data;
      console.log('data is', data);
      yield put(setPosts({ ...data }));
    } catch (error) {
      console.log(error);
    }
  }



