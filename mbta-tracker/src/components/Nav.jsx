import { Link } from 'react-router-dom'

export default function Nav ({formState, handleChange, handleSubmit, newValue, setNewValue, getSchedule}) {


    return (

<div>


        <div className = "nav">
            <Link to= "/Inbound">
                <div>Inbound to Library</div>
            </Link>

            <Link to= "/Outbound">
                <div>Outbound to Home</div>
            </Link>

            <Link to= "/The65">
                <div>65 Bus</div>
            </Link>

        </div>
    
</div>)
    }