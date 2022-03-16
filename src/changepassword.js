// material ui imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

// other imports
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// file imports
import { apiUrl } from './homePage';
import { useEffect } from 'react';

const formvalidation=yup.object(
    {
        password:yup
        .string()
        .required("password filed should not be empty")
        .min(8, "password needs to be minimum 8 characters")
        .max(12, "password needs to be maximum 12 characters"),
        confirmpassword:yup
        .string()
        .required("Confirm password field should not be empty")
        .oneOf([yup.ref('password'), null], 'Passwords must match')
    }
)

export function Changepassword(){
    const{token}=useParams();
    const{values,errors,touched,handleChange,handleSubmit,handleBlur}=useFormik({
        initialValues:{password:""},
        validationSchema:formvalidation,
        onSubmit:((data)=>{
            const auth={
                authtoken:token
            }
            axios({url:`${apiUrl}/changepassword`,method:"post",headers:auth,data:data})
            .then((response)=>console.log(response))
        })
    }) 
  
   return(
    <div>
    <div className="appBar">
        <img src="https://www.bookswagon.com/images/logos/logo-new.png" alt="logo" />
        <TextField className="searchField" label="Search input" />
    </div>
    <div className='forgetPasswordContentContainer'>
        <Card>
            <CardContent>
                <form  onSubmit={handleSubmit} className='forgetPasswordContent'>
                    <h1 className="forgetPasswordTitle">Change Password</h1>
           
                    <TextField 
                    id="password" 
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="changePasswordfields" 
                    label="Password" 
                    variant="outlined" />
                      {errors.password && touched.password && errors.password}
                    <TextField 
                    id="confirmpassword" 
                    name="confirmpassword"
                    value={values.confirmpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="changePasswordfields" 
                    label="Confirm Password" 
                    variant="outlined" />
  {errors.confirmpassword && touched.confirmpassword && errors.confirmpassword}
                    <Button type="submit" className="forgetPasswordfields" variant="contained">Send</Button>
            
                </form>
            </CardContent>
        </Card>
    </div>
</div>
   ) 
}