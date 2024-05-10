import { Button, TextField, TextFieldClassKey } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/user.reducer";



const AddIngredientForm = () => {
    const token = useSelector((state) => state.user.token);
    const formik = useFormik({
        initialValues: {
          name: '',
          description: '',
        },  
        onSubmit:async (values) => {
            const reponse = await axios({
                method: "POST",
                url: "http://localhost:3000/ingredient/addIngredient", 
                data: values,
                headers : {Authorization: `Bearer ${token}`}
        })
            
                if (reponse.data.msg === "Ingredient created successfully"  && reponse.status === 201) {
                NotificationManager.success(reponse.data.msg);
            }else{
                NotificationManager.error(reponse.data.msg);
            }
        },
        });


    return (
        <form onSubmit={formik.handleSubmit} style={{display: "flex"}}>
        <TextField sx={{margin:"5px"}} onChange={formik.handleChange} value={formik.values.name} name = "name" label="Name" variant="outlined" />
        <TextField sx={{margin:"5px"}} onChange={formik.handleChange} value={formik.values.description} name = "description" label="Description" variant="outlined" />
        <Button sx={{margin:"5px"}} type="submit" variant="contained">Submit</Button>
        </form>
    )
}

export default AddIngredientForm;