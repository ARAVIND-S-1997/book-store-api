import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { apiUrl } from './homePage';
import { useFormik } from "formik"
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// First name,Last name,Email id,Date of birth,Password validation code

const formValidation = yup.object({
    firstname: yup
        .string()
        .required("First name should not be empty")
        .min(3, "First name should be minimum 3 characters")
        .max(15, "First name should not be more than 10 characters")
        .matches(/^[A-Za-z]+$/, "First name should only in characters"),
    lastname: yup
        .string()
        .required("Last name should not be empty")
        .min(1, "Last name should be minimum 3 characters")
        .max(15, "Last name should not be more than 10 characters")
        .matches(/^[A-Za-z]+$/, "Last name should only in characters"),
    emailid: yup
        .string()
        .min(5, "email length needs to be minimum 5 characters")
        .required("email needs to be filled")
        .max(30, "your email is too long")
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email"),
    dob: yup
        .string()
        .required("Date of birth should not be empty"),
    password: yup
        .string()
        .required("Password should not be empty")
        .min(8, "Password should be minimum 8 characters")
        .max(12, "Password should not be more than 12 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password should have at least one uppercase letter, one lowercase letter, one number and one special character")
})

// Function component for signup operation

export function SignUp() {
    const history = useHistory()
    const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues: { firstname: "", lastname: "", emailid: "", dob: "", password: "" },
        validationSchema: formValidation,
        onSubmit: (userdata) => signUpReq(userdata)

    })

    const signUpReq = (datas) => {
        console.log(datas)
        axios({ url: `${apiUrl}/authsignup/signup`, method: "POST", data: datas })
            .then((data) => {
                if (data.status == 200) {
                    history.push("/login")
                }
                else {
                    console.log(data)
                }

            })
            .catch((error)=>console.log(error))
    }


    return (
        <div>
            <div className="appBar">
               
            </div>
            <div className="SignUPContentContainer">
                <Card>
                    <CardContent>

                        <form className="SignUPContent" onSubmit={handleSubmit}>
                            <h1 className="signUpTitle">Sign Up</h1>
                            <TextField
                                id="firstname"
                                name="firstname"
                                value={values.firstname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="firstname"
                                className="signUpfields"
                                label="First Name"
                                variant="outlined" />
                            {errors.firstname && touched.firstname && errors.firstname}
                            <TextField
                                id="lastname"
                                name="lastname"
                                value={values.lastname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="lastname"
                                className="signUpfields"
                                label="Last Name"
                                variant="outlined" />
                            {errors.lastname && touched.lastname && errors.lastname}
                            <TextField
                                id="emailid"
                                name="emailid"
                                value={values.emailid}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="emailid"
                                className="signUpfields"
                                label="Email Id"
                                variant="outlined" />
                            {errors.emailid && touched.emailid && errors.emailid}
                            <TextField
                                id="dob"
                                name="dob"
                                value={values.dob}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="date"
                                className="signUpfields"
                                label="Date of birth" tsx={{ width: 220 }} InputLabelProps={{ shrink: true, }} />
                            {errors.dob && touched.dob && errors.dob}
                            <TextField
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="password"
                                className="signUpfields"
                                label="Password"
                                variant="outlined" />
                            {errors.password && touched.password && errors.password}
                            <Button className="signUpfields" type="submit" variant="contained">Sign Up</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
