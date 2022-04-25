// material ui imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

// other imports
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

// file imports
import { apiUrl } from './homePage';

const formvalidation = yup.object(
    {
        emailid: yup
            .string()
            .required("email needs to be filled")
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"email id needs to be in xxxxx@yyy.com")
    }
)

export function ForgetPassword() {
    const{values,errors,touched,handleChange,handleSubmit,handleBlur}=useFormik({
        initialValues:{emailid:""},
        validationSchema:formvalidation,
        onSubmit:((data)=>forgetpasswordreq(data))
    })
     const forgetpasswordreq=(useremail)=>{
         axios({url:`${apiUrl}/authforgetpassword/forgetpassword`,method:"POST",data:useremail})
     }
    return (
    <div>
        <div className="appBar">
           
        </div>
        <div className='forgetPasswordContentContainer'>
            <Card>
                <CardContent>
                    <form  onSubmit={handleSubmit} className='forgetPasswordContent'>
                        <h1 className="forgetPasswordTitle">Forget Password</h1>
               
                        <TextField 
                        id="emailid" 
                        name="emailid"
                        value={values.emailid}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="forgetPasswordfields" 
                        label="Email Id" 
                        variant="outlined" />
                        {errors.emailid && touched.emailid && errors.emailid}
                        <Button type="submit" className="forgetPasswordfields" variant="contained">Send</Button>
                
                    </form>
                </CardContent>
            </Card>
        </div>
    </div>
    )
};