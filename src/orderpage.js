
import { apiUrl } from './homePage';
import { useEffect } from 'react';
import axios from "axios"
import { authtoken, authemail } from "./homePage";

export function Orderpage(){

const getaddress=()=>{
    const auth = {
        emailid: authemail,
        token: authtoken
    }
axios({url:`${apiUrl}/getaddress`,method:"post",headers:auth})
.then((response)=>console.log(response.data))
}
useEffect(getaddress,[])
    return(

        <div>
<h1>final cart</h1>
        </div>
    )
}