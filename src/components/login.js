import { Box, Button, TextField, TextFieldClassKey, Typography } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { useDispatch } from "react-redux";
import { login } from "../redux/user.reducer";


const formData = new FormData();

const Login = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
          email: 'jivynosyfu@mailinator.com',
          password: 'Pa$$w0rd!',
        },


        onSubmit:async (values) => {

            formData.append("email", values.email);
            formData.append("password", values.password);
            formData.append("social_auth_type", "normal");

            const response = await axios.post(
                "https://sandbox.practical.me/api/login",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            if (response.data.isSuccess === true && response.data.responseCode === 200) {
                NotificationManager.success(response.data.message);
                dispatch(login(response.data.data.auth_token));
                console.log(response.data.data.auth_token);
                localStorage.setItem('token', response.data.data.auth_token);

            }else{
                NotificationManager.error(response.data.message);
            }
        },
        });


    return (
        <Box sx={ {padding:"2em" }}>
            <Typography variant="h4" sx={{margin:"10px" }}>Login</Typography>
            <form onSubmit={formik.handleSubmit} style={{display: "flex", flexDirection: "column"}}>
            <TextField sx={{margin:"20px"}} onChange={formik.handleChange} value={formik.values.email} name = "email" label="Email" variant="outlined" />
            <TextField sx={{margin:"20px"}} onChange={formik.handleChange} value={formik.values.password} name = "password" type="password" label="Password" variant="outlined" />
            <Button sx={{margin:"20px"}} type="submit" variant="contained">Login</Button>
            </form>
        </Box>
    )
}

export default Login;