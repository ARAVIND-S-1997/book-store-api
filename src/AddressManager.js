// Material ui import statements
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// other files statements
import { authemail, authtoken } from "./homePage"
import { apiUrl } from './homePage';

// packages imports
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

// hooks imports
import { useHistory } from 'react-router-dom';


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

// User address adding function component

export function Useraddress() {
    const history = useHistory();
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            address: "",
            district: "",
            state: "",
            pincode: "",
            landmark: "",
            contactno: "",
            alternativeno: ""
        },
        validationSchema: formValidation,
        onSubmit: (data) => addaddressReq(data)
    })

    // api req
    const addaddressReq = (values) => {
        const auth = {
            emailid: authemail,
            token: authtoken
        }
        axios({ url: `${apiUrl}/addaddress`, method: "POST", headers: auth, data: values })
            .then((response) => {
                if (response.status === 200) {
                    history.push("/")
                }
            })
    }
    return (
        <div >
            <Card>
                <CardContent>

                    {/* address form */}
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