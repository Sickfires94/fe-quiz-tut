import { Box, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper  } from "@mui/material";
import React from 'react';


const email = localStorage.getItem('email');
const first_name = localStorage.getItem('first_name');
const phone = localStorage.getItem('phone');

const MealCard = () => {
    return (
        <Box sx={{border: "1px solid lightgrey", padding:"30px", margin:"30px" }}>
            <Grid container>
            <Grid>
                <Typography fontWeight={800}>{first_name}</Typography>
                <Typography>{email}</Typography>
                <Typography>{phone}</Typography>
            </Grid>
            <Grid>
            </Grid>
            </Grid>
        </Box>
    )
}

export default MealCard;