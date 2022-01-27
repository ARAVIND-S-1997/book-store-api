import { useEffect ,useState} from "react";
import { apiUrl } from "./homePage"
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';


export function BooksInfo(){

    const[Book,setBook ]=useState([]);
    const[CartBook,setCartBook ]=useState([]);
    const{id}=useParams();
    const getParticularBookData=()=>{
    
            fetch(`${apiUrl}/allbooks/${id}`,{method:"GET"})
            .then((data)=>data.json())
            .then((abc)=>setBook(abc))
    }

    const add=()=>{
        fetch(`${apiUrl}/cart/${id}`,{method:"GET"})
            .then((data)=>data.json())
            .then((abc)=>setCartBook(abc))
    }
    useEffect(getParticularBookData, [id]);

    return (
        <div>
            <img src={Book.Imageurl} alt="poster" />
            <p>{Book.BookName}</p>
            <p>By:{Book.Author}</p>
            <Button onClick={()=>add(id)} color="secondary" variant="text">Add to cart</Button> 
            <p>{Book.Description}</p>
            <p>{Book.Joner}</p>
            <p>{Book.Language}</p>
            <p>{Book.Price}</p>
            <p>{Book.PublicationDate}</p>
            <p>{Book.Publisher}</p>
            <p>{Book.Available}</p>
            <p>{Book.Rating}</p>
        </div>
    )
}

