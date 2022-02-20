import { useEffect, useState } from "react";
import { apiUrl } from "./homePage"
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useHistory } from "react-router-dom";


export function BooksInfo() {
    const [Book, setBook] = useState([]);
    const [, setCartBook] = useState([]);
    const { id } = useParams();
    const history = useHistory();
    const getParticularBookData = () => {
   
            fetch(`${apiUrl}/allbooks/${id}`, { method: "GET" })
            .then((data) => data.json())
            .then((abc) => setBook(abc))
    }
    const add = () => {
        fetch(`${apiUrl}/cart/${id}`, { method: "GET" })
            .then((data) => data.json())
            .then((abc) => setCartBook(abc))
    }
    useEffect(getParticularBookData, [id]);
    return (
        <div>
            <div className="appBar">
                <img src="https://www.bookswagon.com/images/logos/logo-new.png" alt="logo" />
                <TextField className="searchField" label="Search input" />
                <Button onClick={() => { history.push(`/cart`) }} className="appCart" color="error" variant="contained">Cart</Button>
            </div>
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
                            <Button onClick={() => add(id)} color="error" variant="contained">Add to cart</Button>
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

