import { useEffect, useState } from "react"
import { apiUrl } from "./homePage"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from "axios";
import { authtoken, authemail } from "./homePage";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export function DisplayCart() {

    const history = useHistory();
    const [Books, setBooks] = useState([])
    console.log(Books)
    // const finaldata=

    const getAllBookData = () => {
        const auth = {
            emailid: authemail,
            token: authtoken
        }
        axios({ url: `${apiUrl}/cartBooks`, method: "POST", headers: auth })
            .then((response) => setBooks(response.data.cart))

    }


    // const deleteCartBooks = (BookName) => {
    //     console.log(BookName)
    //     fetch(`${apiUrl}/deletecartBooks/${BookName}`, { method: "DELETE" })
    //         .then(() => getAllBookData())

    // }



    useEffect(getAllBookData, [])
    return (
        <div>
            <div className="cartContainer">
                {Books.map(({ BookName, Quantity, _id }) => {
                    return (
                        <div className="cartContainerContent" key={_id}>
                            <Card>
                                <img className="cartContentImg" src={BookName.Imageurl} alt='pic'></img>
                                <CardContent>
                                    <div className="cartContinerTwo">
                                        <h4>{BookName.BookName}</h4>
                                        <h4>Author:{BookName.Author}</h4>
                                        <h4>Price:{BookName.Price}</h4>
                                        <ButtonGroup disableElevation variant="contained">
                                            <Button > +</Button>
                                            <h3>{Quantity}</h3>
                                            <Button>-</Button>
                                        </ButtonGroup>
                                        <IconButton aria-label="delete" size="large">
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>)
                })}
                <div>
                    <Button onClick={() => { history.push("/addressinfo") }}>Place order</Button>
                </div>
            </div>
        </div >

    )
}