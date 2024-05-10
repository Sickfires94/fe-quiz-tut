import { Box, Typography } from "@mui/material";
import Login from "./login";
import SignUp from "./signup";


const AuthPage = () => {
    
    return (
        <Box>
            <Box sx={ {
                display: "flex" , 
                height: "100vh" , 
                width: "100vw",
                justifyContent: "center",
                alignItems: "center",
                }} >
                <Box sx={{ margin:"5px", padding:"10px"}}>
                    <Login/>
                </Box>
                
            </Box>
        </Box>
            )
}

export default AuthPage;