import { useEffect, useState } from "react";
import { apiUrl } from "./homePage"
import { Display } from "./display"
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';

export function Genre() {
    const [Genre, setGenre] = useState([]);
    const { genre } = useParams();
    const getParticularGenre = () => {
        fetch(`${apiUrl}/particular/${genre}`)
            .then((data) => data.json())
            .then((abc) => setGenre(abc))
    }
    useEffect(getParticularGenre, [genre])
    return (
        <div>
            <div className="appBar">
                <img src="https://www.bookswagon.com/images/logos/logo-new.png" alt="logo" />
                <TextField className="searchField" label="Search input" />
            </div>
            <div className="genreContentContainer">
                {Genre.map(({ _id,
                    PublicationDate,
                    Joner,
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
                        joner={Joner}
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
    )
}