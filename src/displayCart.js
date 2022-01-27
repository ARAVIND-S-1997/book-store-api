import { useEffect, useState } from "react"
import { apiUrl } from "./homePage"
import Button from '@mui/material/Button';


export function DisplayCart() {
    const [Books, setBooks] = useState([])
    console.log(Books)
    const getAllBookData = () => {
        fetch(`${apiUrl}/cartBooks`, { method: "GET" })
            .then((data) => data.json())
            .then((abc) => setBooks(abc));

    }
    useEffect(getAllBookData, [])
    return (

        <div className="bookContainer">
            {Books.map(({BookName, Author, Price, Imageurl, _id}) => {
                return (<div key={_id}>
                    <img src={Imageurl} alt='pic'></img>
                    <p>name:{BookName}</p>
                    <p>Author:{Author}</p>
                    <p>Price:{Price}</p>
                    <Button color="secondary" variant="text">Buy Now</Button> 
                </div>)
            })}
        </div>

    )
}