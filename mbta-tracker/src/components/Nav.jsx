import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Nav ({formState, handleChange, handleSubmit}) {

let navigate = useNavigate()
const showStop = (formState) => {
navigate (`${formState.stopID}`)
}


    return (
<div>

<form>
        <label htmlFor="stopID">Bus Stop: </label>
        <select id="stopID"
                onChange={handleChange}
                value={formState.stopID}
                >
          <option value="Inbound">Inbound</option>
          <option value="Outbound">Outbound</option>
        </select>

        <button onClick={()=> {
            showStop(formState)
            handleSubmit()
        }}>Go</button>
</form>



        <div className = "nav">
            <Link to= "/Inbound">
                <div>Inbound to Library</div>
            </Link>

            <Link to= "/Outbound">
                <div>Outbound to Home</div>
            </Link>
        </div>
    
</div>)
    }