import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/counter/Post/PostSlice'

export const store = configureStore({
reducer:{

posts:postsReducer

}
})