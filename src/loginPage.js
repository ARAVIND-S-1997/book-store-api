import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useHistory } from 'react-router-dom';
import { apiUrl } from './homePage';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const formvalidation = yup.object(
    {
        emailid: yup
            .string()
            .required("email needs to be filled"),
        password: yup
            .string()
            .required("Password should not be empty")
    }
)
export function Login() {
    const history = useHistory();
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: { emailid: "", password: "" },
        validationSchema: formvalidation,
        onSubmit: (userdata) => loginReq(userdata)

    })
    const loginReq = (datas) => {
        axios({ url: `${apiUrl}/authlogin/login`, method: "POST", data: datas })
            .then((response) => {
               
                if(response.status===200){
                    console.log(response)
                    const token = response.data.finaltoken;
                    const email=response.data.emailid;
                    localStorage.setItem("token", token)
                    localStorage.setItem("emailid",email)
                    console.log(email,token)
                    history.push("/")
                }
            })
            .catch((error) => { if (error) { console.log(error) } })
    }
    return (
        <div >
            <div className='loginContentContainer'>
                <Card>
                    <CardContent>
                        <form className='loginContent' onSubmit={handleSubmit}>

                            <h3 className="loginTitle">Login</h3>
                            <TextField
                                id="emailid"
                                name="emailid"
                                type="emailid"
                                value={values.emailid}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="loginfields"
                                label="Email Id"
                                variant="outlined" />
                            {errors.emailid && touched.emailid && errors.emailid}
                            <TextField
                                id="password"
                                name="password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="loginfields"
                                label="Password"
                                variant="outlined" />
                            {errors.password && touched.password && errors.password}
                            <Button onClick={loginReq} type="submit" className="loginfields" variant="contained">login</Button>
                            <Link to="/forgetpassword">Forget password</Link>
                            <Link to="/signup">Sign Up</Link>

                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}