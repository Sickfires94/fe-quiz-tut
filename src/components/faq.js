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
import { Link } from "react-router-dom";




const faq = () => {
return (
    <box>
        <Typography>Hello world</Typography>
    </box>);
}

export default faq;