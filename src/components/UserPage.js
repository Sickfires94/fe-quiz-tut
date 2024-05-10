import { AppBar, Box, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import MealCard from "./mealCard";
import AddIngredientForm from "./addIngredientForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setIngredient, setIngredients, setRecipes, setUser } from "../redux/app.reducer";
import { NotificationManager } from "react-notifications";
import AddRecipe from "./addRecipe";
import Logout from "./logout";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FAQ from './faq';
import { Link } from "react-router-dom";

const UserPage = () => {
    //const token = useSelector((state) => state.user.token);

    const token = localStorage.getItem('token');
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.app.recipes);
    const user = useSelector((state) => state.app.user);


    useEffect(() => {
        getRecipes();
    }, []);


    const getRecipes = async () => {
        const response = await axios({
            method: "GET",
            url: "https://sandbox.practical.me/api/user/profile",
            headers: { 
                Authorization: `Bearer ${token}`,
                //"Accept" : "application/json" 
            }
        });
        console.log("Hello");
        if (response.data.responseCode === 200) {
            console.log(response.data.data);
            dispatch(setRecipes(response.data.data.wallet));
            dispatch(setUser(response.data.data));
            
            localStorage.setItem('first_name', response.data.data.first_name);
            localStorage.setItem('phone', response.data.data.phone);
            localStorage.setItem('email', response.data.data.email);

        } else {
            NotificationManager.error(response.data.message);
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
                    <FAQ/>
                    </Typography>
                    <Logout/>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center", width: "100vw", height: "100vh", margin:"100px"}}>
                <Grid container>
                    <MealCard></MealCard>      

                    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Wallet ID</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">transaction type&nbsp;</TableCell>
            <TableCell align="right">transaction date&nbsp;</TableCell>
            <TableCell align="right">Order ID&nbsp;</TableCell>
            <TableCell align="left">description&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recipes.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="right">{row.wallet_id}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.transaction_type}</TableCell>
              <TableCell align="right">{row.transaction_date}</TableCell>
              <TableCell align="right">{row.order_id}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


                </Grid>
            </Box>
        </Box>
    );
}

export default UserPage;