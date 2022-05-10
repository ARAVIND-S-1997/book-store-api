import { More } from "./moreButton"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export function Display({ bookname, poster, rating, id }) {
    return (
       
        <div className="displayContainer">
            <Card >
                <img className="bookPoster" src={poster} alt="book poster" />
                <CardContent>
                    <h4 className="bookName">{bookname}</h4>
                    <p className="bookRating">⭐{rating}</p>
                    <More id={id} />
                </CardContent>
            </Card>
        </div>
     
    )
}