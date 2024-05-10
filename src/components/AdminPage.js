import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import MealCard from "./mealCard";
import AddIngredientForm from "./addIngredientForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setIngredient, setIngredients, setRecipes } from "../redux/app.reducer";
import { NotificationManager } from "react-notifications";
import AddRecipe from "./addRecipe";
import Logout from "./logout";

const AdminPage = () => {
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.app.recipes);



    useEffect(() => {
        getIngredients();
        getRecipes();
    }, []);

    const getIngredients = async () => {
        const response = await axios({
            method: "GET",
            url: "http://localhost:3000/ingredient/getIngredients",
            headers: { Authorization: `Bearer ${token}` }
        });
        if (response.status === 200) {
            dispatch(setIngredients(response.data.ingredients));
        } else {
            NotificationManager.error(response.data.msg);
         }

    };

    const getRecipes = async () => {
        const Rresponse = await axios({
            method: "GET",
            url: "http://localhost:3000/recipe/getRecipe",
            headers: { Authorization: `Bearer ${token}` }
        });
        if (Rresponse.status === 200) {
            console.log(Rresponse.data.data);
            dispatch(setRecipes(Rresponse.data.data));
        } else {
            NotificationManager.error(Rresponse.data.msg);
         }

    };
   


    return (
        <Box>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ADMIN PAGE
                    </Typography>
                    <Logout />
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center", width: "100vw", height: "100vh", margin:"100px"}}>
                
                
                <Grid container>
                    <Grid item xs={12}>
                        <h1 style={{margin:"10px"}}>Add Ingredient</h1>
                        <AddIngredientForm />
                    </Grid>
                    <Grid item xs={12}>
                    <h1 style={{margin:"10px"}}>Add Recipe</h1>
                        <AddRecipe />
                    </Grid>
                    
                        
                </Grid>
            </Box>
        </Box>
    );
}

export default AdminPage;