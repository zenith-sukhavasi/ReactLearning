import { configureStore } from '@reduxjs/toolkit'
import users, { postsAdapter } from './Slices/users'
import createSagaMiddleware from '@redux-saga/core'
import { watcherSaga } from './sagas/rootSaga'


const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
      user:users
  },
  middleware:[sagaMiddleware]

})

sagaMiddleware.run(watcherSaga)