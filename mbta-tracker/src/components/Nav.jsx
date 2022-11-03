import {Link} from 'react-router-dom'

export default function Nav () {
    return (
        <div className = "nav">

            <Link to= "/Inbound">
                <div>Inbound to Library (from Brighton Center)</div>
            </Link>

            <Link to= "/Outbound">
                <div>Outbound to Home (from Brookline Library)</div>
            </Link>



        </div>)
    }