import { Link } from 'react-router-dom'

export default function Nav ({formState, handleChange, handleSubmit}) {


    return (

<div>

<form>
        <label htmlFor="stopID">Bus Stop: </label>
        <select id="stopID"
                onChange={handleChange}
                value={formState.stopID}
                >
        <option value=""></option>
        <option value="57">57</option>
        <option value="65">65</option>
        </select>

        <button onClick={()=> {
            console.log(formState.stopID)
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

            <Link to= "/Schedule">
                <div>57 Schedule</div>
            </Link>

        </div>
    
</div>)
    }