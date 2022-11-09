//Links in Nav Bar to change URLS/between pages
import { Link } from 'react-router-dom'

export default function Nav () {

return (
    <div>

        <div className = "nav">
            
            <div>
            <Link to= "/The65">
                <div>65 Bus Route</div>
            </Link>
            </div>

            <div>
            <Link to= "/Inbound">
                <div>Home → Library</div>
            </Link>

            <Link to= "/Outbound">
                <div>Library → Home</div>
            </Link>
            </div>

        </div>
    
    </div>
    )
}