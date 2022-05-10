// Material ui import statements
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// other files statements
import { apiUrl } from "./homePage"
import { authtoken, authemail } from "./homePage";

// other packages statements
import axios from "axios";

// hooks imports
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


// Book information componenet
export function BooksInfo() {

    const [Book, setBook] = useState([]);
    console.log(Book);
    const { id } = useParams();
    const history = useHistory();

    // api request
    const getParticularBookData = () => {
        axios({ url: `${apiUrl}/particular/${id}`, method: "GET", })
            .then((response) => setBook(response.data))
    }
    const add = (value) => {
        const auth = {
            token: authtoken,
            emailid: authemail
        }

        axios({ url: `${apiUrl}/addtocart/${value}`, method: "POST", headers: auth })
    }
    useEffect(getParticularBookData, [id]);
    return (
        <div>
            <div className="bookInfoContainer">
                <Card>
                    <div className="bookContainerParts">
                        <div>
                            <img className="bookInfoImg" src={Book.Imageurl} alt="poster" />
                        </div>
                        <div className="bookPartOne">
                            <h2>{Book.BookName}</h2>
                            <h4>Author:{Book.Author}</h4>
                            <h4>⭐{Book.Rating}</h4>
                            <h4>Language:{Book.Language}</h4>
                            <h4>Price:{Book.Price}</h4>
                            <h4>Published in:{Book.PublicationDate}</h4>
                            <h4>Published by:{Book.Publisher}</h4>
                            <Button onClick={() => {
                                (authtoken) ? add(id) : (history.push("/login"))
                            }} color="error" variant="contained">Add to cart</Button>
                        </div>
                    </div>
                    <CardContent>

                        <div className="bookInfoDescription">
                            <h4>Description</h4>
                            <p>{Book.Description}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

