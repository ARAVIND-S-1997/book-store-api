import { useHistory } from "react-router-dom"
import Button from '@mui/material/Button';


export function More({ id }) {
    const history = useHistory();
    return (
        <div>
            <Button onClick={() => { history.push(`/book/${id}`) }} color="secondary" variant="text">More</Button>
        </div>
    )
}