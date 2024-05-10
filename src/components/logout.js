import { useDispatch } from "react-redux";
import { logout } from "../redux/user.reducer";
import { Formik } from "formik";
import { Button } from "@mui/material";
import { NotificationManager } from "react-notifications";


const Logout = () => {
const dispatch = useDispatch();



    return (
        <Button color="inherit" onClick={() => {
            dispatch(logout()); 
            NotificationManager.success("Logged out");
          }}>Logout</Button>
    );
};

export default Logout;