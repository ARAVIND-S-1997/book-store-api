// Material ui import statements
import Button from '@mui/material/Button';

// hooks imports
import { useHistory } from "react-router-dom"


// more button component (which is used in homepage)
export function More({ id }) {
    const history = useHistory();
    return (
        <div>
            <Button onClick={() => { history.push(`/book/${id}`) }} color="secondary" variant="text">More</Button>
        </div>
    )
}