import { useEffect, useState } from "react"
import { Display } from "./display"
import { Link } from "react-router-dom";
import { generateUtilityClasses } from "@mui/material";


export const apiUrl = "http://localhost:9000/books";
export function Bookslist() {
    const [Books, setBooks] = useState([])
    console.log(Books)
    const getAllBookData = () => {
        fetch(`${apiUrl}/allbooks`, { method: "GET" })
            .then((data) => data.json())
            .then((abc) => setBooks(abc));

    }
    useEffect(getAllBookData, [])
    return (
        <div>
            <div className="top">
                <h1>top</h1>
            </div>
            <div className="twocontainers">
                <div className="left">
                    <h2>Browse by category</h2>
                    <Link to="/allbooks/Computer & Internet">Computer&Internet</Link>
                    <Link to="/allbooks/Comics">Graphic Novel</Link>
                    <Link to="/allbooks/Fantasy">Fantasy</Link>
                    <Link to="/allbooks/Romance">Romance</Link>
                    <Link to="/allbooks/Fiction">Fiction</Link>
                    <Link to="/allbooks/Poetry">Poetry</Link>
                </div>

                <div className="rigth">
                    <div>
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
                                genre={generateUtilityClasses}
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

        </div>
    )
}

