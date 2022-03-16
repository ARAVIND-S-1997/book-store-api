
import { Leftcomponent } from "./profiledashboardleftcomponent"

export function Profiledashboard(){



    return(<div>
        <div>
<h1>nav bar</h1>
        </div>
        <div className="profiledashboard-two-components">
           <div className="profiledashboard-leftcomponent">
               <Leftcomponent/>
           </div> 
           <div  className="profiledashboard-rightcomponent">
               <h1>content </h1>
           </div> 
        </div>
    </div>)
}