
import { apiUrl } from './homePage';
import { useEffect } from 'react';
import axios from "axios"


export function Orderpage(){

const getdata=()=>{
axios({url:`${apiUrl}/finalcart`,method:"GET"})
.then((response)=>console.log(response.data))
}
useEffect(getdata,[])
    return(

        <div>
<h1>final cart</h1>
        </div>
    )
}