import { Link } from 'react-router-dom'

export default function Nav ({formState, handleChange, handleSubmit, newValue, setNewValue, getSchedule}) {


    return (

<div>

<form onSubmit={handleSubmit}>
        <label htmlFor="stopID">Bus #: </label>
        <select id="stopID"
                onChange={handleChange}
                value={formState.stopID}
                >
        <option value=""></option>
        <option value="57">57</option>
        <option value="65">65</option>
        <option value="66">66</option>
        <option value="86">86</option>
        </select>

        <button onClick={(event)=> {

            // console.log(formState.stopID)
            setNewValue(formState.stopID)
            // console.log(newValue)
            handleSubmit()
            getSchedule(`${setNewValue}`)
        }}>Update Schedule</button>
</form>



        <div className = "nav">
            <Link to= "/Inbound">
                <div>Inbound to Library</div>
            </Link>

            <Link to= "/Outbound">
                <div>Outbound to Home</div>
            </Link>

            <Link to= "/Schedule">
                <div>See Schedule</div>
            </Link>

        </div>
    
</div>)
    }