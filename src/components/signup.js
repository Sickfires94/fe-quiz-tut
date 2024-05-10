import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { NotificationManager } from "react-notifications";



const SignUp = () => {


    const formik = useFormik({
        initialValues: {
          username: '',
          email: '',
          password: '',
        },
        onSubmit:async (values) => {
            const reponse = await axios.post("http://localhost:3000/auth/signUp", {
                ...values, role: "user"
            })
            NotificationManager.success(reponse.data.msg);
        
        },
        });


    return (
        <Box sx={ {borderRight:"solid lightgrey", padding: "3em" }}>
            <form onSubmit={formik.handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                    <Typography variant="h4" sx={{margin:"10px"}}>Sign Up</Typography>
                    <TextField sx={{margin:"5px"}} onChange={formik.handleChange} value={formik.values.username} name = "username"  label="User Name" variant="outlined" />
                    <TextField sx={{margin:"5px"}} onChange={formik.handleChange} value={formik.values.email} name = "email" label="Email" variant="outlined" />
                    <TextField sx={{margin:"5px"}} onChange={formik.handleChange} value={formik.values.password} name = "password" type="password" label="Password" variant="outlined" />
                    <Button sx={{margin:"10px"}} type="submit" variant="contained">Sign up</Button>
                    </form>
        </Box>
    )
}

export default SignUp;