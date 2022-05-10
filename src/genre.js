// other files statements
import { apiUrl } from "./homePage"
import { Display } from "./display"

// hooks imports
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

// genre component
export function Genre() {

    const [Genre, setGenre] = useState([]);
    const { genre } = useParams();
    console.log(genre)

    // genre api request
    const getParticularGenre = () => {
        fetch(`${apiUrl}/genre/${genre}`)
            .then((data) => data.json())
            .then((abc) => setGenre(abc))
    }

    useEffect(getParticularGenre, [genre])

    return (
        <div>
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