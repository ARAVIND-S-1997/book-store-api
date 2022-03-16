import { useEffect, useState } from "react"
import { apiUrl } from "./homePage"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';






export function DisplayCart() {
    const [Books, setBooks] = useState([])



    
    console.log(Books)

  

    const getAllBookData = () => {
        fetch(`${apiUrl}/cartBooks`, { method: "GET" })
            .then((data) => data.json())
            .then((abc) => setBooks(abc));
    }
    const deleteCartBooks=(BookName)=>{
        console.log(BookName)
        fetch(`${apiUrl}/deletecartBooks/${BookName}`, { method: "DELETE" })
        .then(()=>getAllBookData())
        
    }



    useEffect(getAllBookData, [])
    return (
        <div>
            <div className="appBar">
                <img src="https://www.bookswagon.com/images/logos/logo-new.png" alt="logo" />
                <TextField className="searchField" label="Search input" />
            </div>
            <div className="cartContainer">
                {Books.map(({ BookName, Author, Price, Imageurl, _id }) => { 
                    return (
                        <div className="cartContainerContent" key={_id}>
                            <Card>
                                <img className="cartContentImg" src={Imageurl} alt='pic'></img>
                                <CardContent>
                                    <div className="cartContinerTwo">
                                        <h4>{BookName}</h4>
                                        <h4>Author:{Author}</h4>
                                        <h4>Price:{Price}</h4>
                                        <Button color="error" variant="contained">Buy Now</Button>
                                        <Button onClick={()=>deleteCartBooks(BookName)} color="error" variant="contained">Delete</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>)    
                })}
            </div>
        </div>

    )
}