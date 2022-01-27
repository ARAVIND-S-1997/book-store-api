import { More } from "./moreButton"
export function Display({ bookname, poster, rating,id}) {
    return (
        
        <div className="bookContainer">
         <img className="bookPoster" src={poster} alt="book poster" />
            <h4 className="bookName">{bookname}</h4>
            <p className="bookRating">⭐{rating}</p>
            <More id={id}/>
            
       </div>    
    
    )}