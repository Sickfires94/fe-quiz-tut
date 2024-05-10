import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    ingredients: [],
    recipes: [],
    user: []
};

const appSlice = createSlice({
    name: "app",
    initialState ,
    reducers: {
    setIngredients: (state, action)=> {
        state.ingredients = action.payload;
        },
    setRecipes: (state, action)=> {
        state.recipes = action.payload;
        },
    setUser: (state, action) => {
        state.user = action.payload;
    }
    }
  })
  
  export const { setIngredients , setRecipes, setUser } = appSlice.actions
  export default appSlice;