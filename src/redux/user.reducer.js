import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    loggedIn: false,
    token: ""
  }

const userSlice = createSlice({
    name: "user",
    initialState ,
    role: "",
    reducers: {
      login: (state, action)=> {
        state.loggedIn = true;
        state.token = action.payload;
        state.role = action.payload.role;
        
      },
      logout: state => {
        state.loggedIn = initialState.loggedIn;
        state.token = initialState.token;
        state.role = initialState.role;

      }
    }
  })
  
  export const { login , logout } = userSlice.actions
  export default userSlice;