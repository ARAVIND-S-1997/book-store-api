// Material ui import statements
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// other import statements
import { useFormik } from 'formik';
import * as yup from 'yup';
import{authemail,authtoken} from "./homePage"
import axios from 'axios';
import { apiUrl } from './homePage';
import { useHistory } from 'react-router-dom';



// Validatation Schema
const formValidation = yup.object({
    name: yup
        .string()
        .required(),
    contactno: yup
        .string()
        .required(),
    pincode: yup
        .string()
        .required(),
    address: yup
        .string()
        .required(),
    district: yup
        .string()
        .required(),
    state: yup
        .string()
        .required(),
    landmark: yup
        .string()
        .required(),
    alternativeno: yup
        .string()
        .required()
})

// User address adding function component

export function Useraddress() {
const history=useHistory();
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            contactno: "",
            pincode: "",
            address: "",
            district: "",
            state: "",
            landmark: "",
            alternativeno: ""
        },
        validationSchema: formValidation,
        onSubmit: ((data) =>{
            const auth={
                emailid:authemail,
                token:authtoken
            }
        axios({url:`${apiUrl}/useraddress`,method:"POST",headers:auth,data:{addressinfo:data}})
        .then((response)=>{
        if(response.status===200){
            history.push("/")
        }
        })
        })
    })

    return (
        <div >
            <form className='temp' onClick={handleSubmit}>
                <TextField
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="field"
                    label="Name" />
                {errors.name && touched.name && errors.name}
                <TextField
                    id="contactno"
                    name="contactno"
                    value={values.contactno}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="searchField"
                    label="Contact number" />
                {errors.contactno && touched.contactno && errors.contactno}
                <TextField
                    id="pincode"
                    name="pincode"
                    value={values.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="searchField"
                    label="Pincode" />
                {errors.pincode && touched.pincode && errors.pincode}
                <TextField
                    id="address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="searchField"
                    label="Address" />
                {errors.address && touched.address && errors.address}
                <TextField
                    id="district"
                    name="district"
                    value={values.district}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="searchField"
                    label="City/District/Town" />
                {errors.district && touched.district && errors.district}
                <TextField
                    id="state"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="searchField"
                    label="State" />
                {errors.state && touched.state && errors.state}
                <TextField
                    id="landmark"
                    name="landmark"
                    value={values.landmark}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="searchField"
                    label="Landmark" />
                {errors.landmark && touched.landmark && errors.landmark}
                <TextField
                    id="alternativeno"
                    name="alternativeno"
                    value={values.alternativeno}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="searchField"
                    label="Alternative contact number" />
                {errors.alternativeno && touched.alternativeno && errors.alternativeno}
                <Button className="appLogIN" color="error" variant="contained">
                    Save
                </Button>
            </form>
        </div>
    )
}