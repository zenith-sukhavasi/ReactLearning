import {takeLatest} from 'redux-saga/effects'
import { getPost, getPosts,addPost, deletePost } from '../Slices/users'
import { handlePost, handlePosts,handleAddPost, handleDeletePost } from './handlers/posts'

export function* watcherSaga() {
    console.log(getPost.type,deletePost)
    yield takeLatest (getPosts.type,handlePosts) 
    yield takeLatest (getPost.type,handlePost) 
    yield takeLatest (addPost.type,handleAddPost) 
    yield takeLatest (deletePost.type,handleDeletePost) 
}