import { useEffect, useState } from "react"
import { Display } from "./display"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


export const apiUrl = "http://localhost:9000/books";
export function Bookslist() {
    const [Books, setBooks] = useState([])
   

    const history = useHistory()
    const getAllBookData = () => {
        fetch(`${apiUrl}/allbooks`, { method: "GET" })
            .then((data) => data.json())
            .then((abc) => setBooks(abc));

    }
    useEffect(getAllBookData, [])



    return (
        <div>
            <div className="appBar">
                <img src="https://www.bookswagon.com/images/logos/logo-new.png" alt="logo" />
                <TextField  className="searchField" label="Search input" />
                    <Button onClick={() => { history.push(`/login`) }} className="appLogIN" color="error" variant="contained">
                        <AccountCircleRoundedIcon />
                        Login
                    </Button>
            </div>
            <div className="twocontainers">
                <div className="left">
                    <Card >
                        <CardContent className="leftCardContents" >
                            <h3>Browse by category</h3>
                            <Link to="/allbooks/Computer & Internet">Computer&Internet</Link>
                            <Link to="/allbooks/Comics">Graphic Novel</Link>
                            <Link to="/allbooks/Fantasy">Fantasy</Link>
                            <Link to="/allbooks/Romance">Romance</Link>
                            <Link to="/allbooks/Fiction">Fiction</Link>
                            <Link to="/allbooks/Poetry">Poetry</Link>
                        </CardContent>
                    </Card>
                </div>
                <div className="right">
                    {Books.map(({ _id,
                        PublicationDate,
                        Genre,
                        BookName,
                        Author,
                        Description,
                        Language,
                        Publisher,
                        Price,
                        Imageurl,
                        Available,
                        Rating }, i) => <Display
                            key={i}
                            id={_id}
                            published={PublicationDate}
                            genre={Genre}
                            author={Author}
                            description={Description}
                            bookname={BookName}
                            poster={Imageurl}
                            language={Language}
                            available={Available}
                            price={Price}
                            publisher={Publisher}
                            rating={Rating} />)}
                </div>
            </div>

        </div>
    )
}

