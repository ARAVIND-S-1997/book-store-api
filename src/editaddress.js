// Material ui import statements
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// other import statements
import { useFormik } from 'formik';
import * as yup from 'yup';
import { authemail, authtoken } from "./homePage"
import axios from 'axios';
import { apiUrl } from './homePage';
import { useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';

// Validatation Schema
const formValidation = yup.object({
    name: yup.string().required("Name should not be empty "),
    address: yup.string().required("Address should not be empty"),
    district: yup.string().required("District should not be empty"),
    state: yup.string().required("State should not be empty"),
    pincode: yup.number().required("Pincode should not be empty"),
    landmark: yup.string().required("Landmark should not be empty"),
    contactno: yup.number().required("Contact number should not be empty"),
    alternativeno: yup.number().required("Alternative contact number should not be empty")
});

export function Editaddress(){

    const history = useHistory();

    const [useraddress, setuseraddress] = useState([]);
    console.log(useraddress);

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            name: useraddress.name,
            address: useraddress.address,
            district: useraddress.district,
            state: useraddress.state,
            pincode: useraddress.pincode,
            landmark: useraddress.landmark,
            contactno: useraddress.contactno,
            alternativeno: useraddress.alternativeno
        },
        validationSchema: formValidation,
        enableReinitialize:true,
        onSubmit: (data) => editaddressReq(data)
    })


    const orderpadedataReq = () => {
        const auth = {
            emailid: authemail,
            token: authtoken
        }

        axios({ url: `${apiUrl}/orderdashboard`, method: "POST", headers: auth })
            .then((response) => {
                setuseraddress(response.data.addressinfo);
            })
    }

    useEffect(orderpadedataReq, []);


    const editaddressReq = (valuess) => {
        const auth = {
            emailid: authemail,
            token: authtoken
        }
        axios({ url: `${apiUrl}/addaddress`, method: "POST", headers: auth, data: valuess })
            .then((response) => {
                if (response.status === 200) {
                    history.push("/orderdashboard")
                }
            })
    }
    return(
        <div>
      <Card>

<CardContent>

    <form className='temp' onClick={handleSubmit}>
        <h3>Billing address</h3>
        <TextField
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="searchField"
            label="Name" />
        {errors.name && touched.name && errors.name}

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
            id="pincode"
            name="pincode"
            value={values.pincode}
            onChange={handleChange}
            onBlur={handleBlur}
            className="searchField"
            label="Pincode" />
        {errors.pincode && touched.pincode && errors.pincode}

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
            id="contactno"
            name="contactno"
            value={values.contactno}
            onChange={handleChange}
            onBlur={handleBlur}
            className="searchField"
            label="Contact number" />
        {errors.contactno && touched.contactno && errors.contactno}

        <TextField
            id="alternativeno"
            name="alternativeno"
            value={values.alternativeno}
            onChange={handleChange}
            onBlur={handleBlur}
            className="searchField"
            label="Alternative contact number" />
        {errors.alternativeno && touched.alternativeno && errors.alternativeno}

        <Button className="" color="error" variant="contained">
            Save
        </Button>
    </form>
</CardContent>
</Card>
        </div>
    )
}