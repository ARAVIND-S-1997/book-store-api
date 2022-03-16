import axios from "axios";
import { useEffect, useState } from "react"
import {apiUrl} from "./homePage"

export function Profileinformation(){

const[userdetails,setuserdetails]=useState([]);
const profiledatareq=()=>{

    const details={
        emailid
    }
    axios({url:`${apiUrl}/profileinfo`,method:"POST",data})
    .then((response)=>setuserdetails(response.data))
    .catch((error)=>console.log(error))
}

useEffect(profiledatareq,[])

    return(
    <div>
<h1>{userdetails.name}</h1>
<h1>{userdetails.contactno}</h1>
    </div>
    )
}