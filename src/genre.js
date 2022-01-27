import { useEffect,useState } from "react";
import { apiUrl } from "./homePage"
import { Display } from "./display"
import { useParams } from 'react-router-dom';

export function Genre(){
const[Genre,setGenre]=useState([]);
const {genre}=useParams();
const getParticularGenre=()=>{
    fetch(`${ apiUrl }/particular/${genre}`)
    .then((data)=>data.json())
    .then((abc)=>setGenre(abc))
}
useEffect(getParticularGenre,[])

    return(
        <div>
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
    )
}