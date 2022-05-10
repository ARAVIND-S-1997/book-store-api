// Material ui import statements
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button'

// other files statements
import { apiUrl } from './homePage';
import { authtoken, authemail } from "./homePage";

// hooks imports
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// packages imports
import axios from "axios"

// order page component
export function Orderpage() {
    const history = useHistory();
    const [useraddressinfo, setuseraddressinfo] = useState([]);
    console.log(useraddressinfo);

    const [usercart, setusercart] = useState([]);
    console.log(usercart);

    // orderpage api request
    const orderpagedataReq = () => {
        const auth = {
            emailid: authemail,
            token: authtoken
        }

        axios({ url: `${apiUrl}/orderdashboard`, method: "POST", headers: auth })
            .then((response) => {
                setuseraddressinfo(response.data.addressinfo);
                setusercart(response.data.cart);
            })
    }

    useEffect(orderpagedataReq, [])

    return (

        <div>
            <div>
                <Card>
                    <CardContent>
                        <h2>Books are:</h2>
                        {usercart.map(({ BookName, Quantity, _id }) => {
                            return (
                                <div>
                                    <img className="cartContentImg" src={BookName.Imageurl} alt='pic'></img>
                                    <h4>{BookName.BookName}</h4>
                                    <h4>Quantity: {Quantity}</h4>
                                    <h4>Price: {BookName.Price}</h4>
                                </div>
                            )
                        })}
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card>
                    <CardContent>
                        <h2>Billing address:</h2>
                        <h3>Name:{useraddressinfo.name}</h3>
                        <h3>Address:{useraddressinfo.address}</h3>
                        <h3>District:{useraddressinfo.district}</h3>
                        <h3>State:{useraddressinfo.state}</h3>
                        <h3>Pincode:{useraddressinfo.pincode}</h3>
                        <h3>Landmark:{useraddressinfo.landmark}</h3>
                        <h3>Contact number:{useraddressinfo.contactno}</h3>
                        <h3>Alternative number:{useraddressinfo.alternativeno}</h3>
                        <Button onClick={() => history.push("/editaddress")} color="error" variant="contained">Edit address</Button>
                    </CardContent>
                </Card>
            </div>
            <div>
                <h2>Mode of payment:</h2>
                <h3>Cash on deliver</h3>
                <Button onClick={() => history.push("/orderpage")} color="error" variant="contained">Place order</Button>
            </div>
        </div>
    )
}