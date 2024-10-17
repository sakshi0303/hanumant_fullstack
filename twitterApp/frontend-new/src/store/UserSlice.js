import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

let userdetails=JSON.parse(localStorage.getItem("twitterLogin"))
const initialState = {
  login:userdetails?userdetails.login:false,
  user:userdetails?userdetails.user:'',
  token:userdetails?userdetails.token:''
}

export const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (token) => {
      const response = await axios.get('http://localhost:8080/users/getuserinfo',{
        headers:{'Authorization':token}})
      console.log(response.data);
      return response.data.user
    },
  )

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setstate: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.login=true;
      state.token=action.payload
      localStorage.setItem("twitterLogin",JSON.stringify({login:true,token:action.payload,user:''}))
      
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(action.payload);
      state.user=action.payload;
      //localStorage.setItem("twitterLogin",JSON.stringify({...state,user:action.payload}))
      
    })

     // builder.addCase(fetchUserById.rejected, (state, action) => {
    //   // Add user to the state array
    //   console.log("error in fetching user details")
    // })

  },
})

// Action creators are generated for each case reducer function
export const { setstate, decrement, incrementByAmount } = UserSlice.actions

export default UserSlice.reducer