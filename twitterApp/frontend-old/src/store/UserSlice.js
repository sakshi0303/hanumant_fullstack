import { createSlice } from '@reduxjs/toolkit'

let UserDetail=JSON.parse(localStorage.getItem("TwitterLogin"))
const initialState = {
  login:UserDetail?UserDetail.login:false,
  user:UserDetail?UserDetail.user:'',
  token:UserDetail?UserDetail.token:'',
}

const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (token) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  },
)

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSate: (state,action) => {
      console.log(action);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.token=action.payload
      state.login=true
      window.localStorage.setItem("TwitterLogin",JSON.stringify({login:true,token:action.payload,user:''}))
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSate, decrement, incrementByAmount } = UserSlice.actions

export default UserSlice.reducer