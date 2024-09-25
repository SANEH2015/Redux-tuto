import {createSlice} from '@reduxjs/toolkit'
const initialState = [
    {id:"1",title:"Learning Redus Toolkit",content:"I've heard good things."},
    {id:"2",title:"Slices...",content:"The more i say slice, the more i want pizza"}
]


const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
       postAdded(state,action) {
        state.push(action.payload)
       }
    }

    
})
export const selectAllposts =(state) => state.posts;
export const {postAdded} = postsSlice.actions
export default postsSlice.reducer