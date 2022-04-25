import { useEffect, useState } from "react"
import { apiUrl } from "./homePage"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import axios from "axios";
import { authtoken, authemail } from "./homePage";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";




export function DisplayCart() {

    const history=useHistory();
    const [Books, setBooks] = useState([])
    console.log(Books)
    const getAllBookData = () => {
        const auth = {
            emailid: authemail,
            token: authtoken
        }
        axios({ url: `${apiUrl}/cartBooks`, method: "post", headers: auth })
            .then((response) => setBooks(response.data.cart))

        // fetch(`${apiUrl}/cartBooks`, { method: "post" })
        //     .then((data) => data.json())
        //     .then((abc) => setBooks(abc));
    }
    // const deleteCartBooks = (BookName) => {
    //     console.log(BookName)
    //     fetch(`${apiUrl}/deletecartBooks/${BookName}`, { method: "DELETE" })
    //         .then(() => getAllBookData())

    // }



    useEffect(getAllBookData, [])
    return (
        <div>
            <div className="appBar">
                <img src="https://www.bookswagon.com/images/logos/logo-new.png" alt="logo" />
                <TextField className="searchField" label="Search input" />
            </div>
            <div className="cartContainer">
                {Books.map(({ BookName, Author, Price, Imageurl, _id }) => {
                    return (
                        <div className="cartContainerContent" key={_id}>
                            <Card>
                                <img className="cartContentImg" src={Imageurl} alt='pic'></img>
                                <CardContent>
                                    <div className="cartContinerTwo">
                                        <h4>{BookName}</h4>
                                        <h4>Author:{Author}</h4>
                                        <h4>Price:{Price}</h4>
                                        <ButtonGroup disableElevation variant="contained">
                                            <Button>+</Button>
                                            <h1>count</h1>
                                            <Button>-</Button>
                                        </ButtonGroup>
                                        {/* <IconButton onClick={() => deleteCartBooks(BookName)} aria-label="delete" size="large">
                                            <DeleteIcon />
                                        </IconButton> */}
                            

                                    </div>
                                </CardContent>
                            </Card>
                        </div>)
                })}
                <div>
                    <Button onClick={()=>{history.push("/addressinfo")}}>Place order</Button>
                </div>
            </div>
        </div>

    )
}