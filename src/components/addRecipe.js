import { Button, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField, TextFieldClassKey } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/user.reducer";



const AddRecipe = () => {
    const token = useSelector((state) => state.user.token);
    const ingredient = useSelector((state) => state.app.ingredients);
    const formik = useFormik({
        initialValues: {
          name: '',
          description: '',
          ingredients: [],
        },  
        onSubmit:async (values) => {
            const reponse = await axios({
                method: "POST",
                url: "http://localhost:3000/recipe/addRecipe", 
                data: values,
                headers : {Authorization: `Bearer ${token}`}
        })
            
                if (reponse.data.msg === "Recipe created successfully"  && reponse.status === 201) {
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
        <FormControl sx={{ margin:"5px", width: 300 }}>
        <InputLabel id="ingredient">Ingredients</InputLabel>
        <Select
          name = "ingredients"
          multiple
          value={formik.values.ingredients}
          onChange={formik.handleChange}
          input={<OutlinedInput label="Ingredients" />}
          renderValue={(selected) => selected.map((id) => ingredient.find((i) => i._id === id)?.name).join(', ')}
          >
          {
          ingredient.map((i) => (
            <MenuItem key={i._id} value={i._id}>
              <Checkbox checked={formik.values.ingredients.includes(i._id)} />
              <ListItemText primary={i.name} />
            </MenuItem>
          ))
          }
        </Select>
      </FormControl>
        
        <Button sx={{margin:"5px"}} type="submit" variant="contained">Submit</Button>
        </form>
    )
}

export default AddRecipe;