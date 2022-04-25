// other imports
import { useEffect, useState } from "react"
import { Display } from "./display"
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios"

// Material ui import statements
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// import { useParams } from "react-router-dom";




// Variable where the token and email is 
export const authtoken = localStorage.getItem("token")
export const authemail = localStorage.getItem("emailid")
console.log(authtoken, authemail);

// Application programming interface url
export const apiUrl = "http://localhost:8000";

export function Bookslist() {
    const [Books, setBooks] = useState([]);
    console.log(Books);
    const history = useHistory();

    useEffect(() => {
        axios({ url: `${apiUrl}/books/allbooks`, method: "GET" })
            .then((response) => setBooks(response.data.Books));
    }, [])

    // Material ui codes for dropdown menu in homepage
    

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



