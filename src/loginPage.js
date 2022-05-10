// Material ui import statements
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// hooks imports
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

// other files statements
import { apiUrl } from './homePage';

// packages imports
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

// schema
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

// login component
export function Login() {

    const history = useHistory();

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: { emailid: "", password: "" },
        validationSchema: formvalidation,
        onSubmit: (userdata) => loginReq(userdata)

    })

    // login api request
    const loginReq = (datas) => {
        axios({ url: `${apiUrl}/login`, method: "POST", data: datas })
            .then((response) => {
                if (response.status === 200) {
                    console.log(response)
                    const token = response.data.finaltoken;
                    const email = response.data.emailid;
                    localStorage.setItem("token", token)
                    localStorage.setItem("emailid", email)
                    console.log(email, token)
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
                        {/* login form */}
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