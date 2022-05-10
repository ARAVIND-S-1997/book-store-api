// Material ui import statements
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// hooks imports
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";

// other files statements
import { Display } from "./display"

// packages imports
import axios from "axios"


// Variable where the token and email is 
export const authtoken = localStorage.getItem("token")
export const authemail = localStorage.getItem("emailid")
console.log(authtoken, authemail);

// Application programming interface url
export const apiUrl = "http://localhost:8000/books";


// Home page component
export function Bookslist() {
    const [Books, setBooks] = useState([]);
    console.log(Books);
    const history = useHistory();

    // api request
    useEffect(() => {
        axios({ url: `${apiUrl}/allbooks`, method: "GET" })
            .then((response) => setBooks(response.data.Books));
    }, [Books])

    return (
        <div>
            <div className="twocontainers">
                <div className="left">
                    <Card >
                        <CardContent className="leftCardContents" >
                            <Button onClick={history.push("/")}>Home</Button>
                            <h3>Browse by category</h3>
                            <Button onClick={() => history.push("/allbooks/Computer & Internet")}>Computer&Internet</Button>
                            <Button onClick={() => history.push("/allbooks/Comics")}>Graphic Novel</Button>
                            <Button onClick={() => history.push("/allbooks/Fantasy")}>Fantasy</Button>
                            <Button onClick={() => history.push("/allbooks/Romance")}>Romance</Button>
                            <Button onClick={() => history.push("/allbooks/Fiction")}>Fiction</Button>
                            <Button onClick={() => history.push("/allbooks/Poetry")}>Poetry</Button>
                        </CardContent>
                    </Card>
                </div>
                <div className="right">
                    <Card className="right-card">
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
                    </Card>
                </div>
            </div>

        </div>
    )
}



