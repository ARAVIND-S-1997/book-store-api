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



// export function Login() {
//     const [username, setusername] = useState([]);
//     const [password, setpassword] = useState([]);
//     const history = useHistory();
//     const loginReq = () => {
//         const loginData = {
//             username: username,
//             password: password
//         }
//         fetch(`${apiUrl}/login`,
//             {
//                 method: "POST",
//                 body: JSON.stringify(loginData),
//                 headers: { "Content-Type": "application/json", },
//             })
//             .catch()
//             .then(() => { history.push("/welcome") })

//     }




//     return (
//         <div >
//             <div className="appBar">
//                 <img src="https://www.bookswagon.com/images/logos/logo-new.png" alt="logo" />
//                 <TextField className="searchField" label="Search input" />
//             </div>
//             <div className='loginContentContainer'>
//                 <Card>
//                     <CardContent>
//                         <div className='loginContent'>
//                             <h3 className="loginTitle">Login</h3>
//                             <TextField onChange={(event) => setusername(event.target.value)} className="loginfields" id="outlined-basic" label="Email Id" variant="outlined" />
//                             <TextField onChange={(event) => setpassword(event.target.value)} className="loginfields" id="outlined-basic" label="Password" variant="outlined" />
//                             <Button onClick={loginReq} className="loginfields" variant="contained">login</Button>
//                             <Link to="/forgetpassword">Forget password</Link>
//                             <Link to="/signup">Sign Up</Link>

//                         </div>
//                     </CardContent>
//                 </Card>
//             </div>
//         </div>
//     )
// }

const formvalidation=yup.object(
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
        // fetch(`${apiUrl}/login`,
        //     {
        //         method: "POST",
        //         body: JSON.stringify(datas),
        //         headers: { "Content-Type": "application/json", },
        //     })
        //     .then((data)=>{
        //     // if(data.status==200){
        //     // history.push("/welcome")
        //     console.log(data)
        //     }
        //     // else{
        //     //     console.log(data)
        //     // }}
        //     )
        //     .catch()

        axios({ url: `${apiUrl}/login`, method: "POST", data: datas })
        .then((data) => {
            if (data.status == 200) {
                history.push("/welcome")
            }
            else {
                console.log(data)
            }

        })

        .catch()
           

    }




    return (
        <div >
            <div className="appBar">
                <img src="https://www.bookswagon.com/images/logos/logo-new.png" alt="logo" />
                <TextField className="searchField" label="Search input" />
            </div>
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