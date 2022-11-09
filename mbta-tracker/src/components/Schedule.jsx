//Schedule.jsx was a partially completed project at mapping the schedule for the line for the whole day, but was scrapped because of the API call; each stop had an ID# but not the name, so a 2nd axios call was needed to sync up, but the time lag and targeting the values wasn't working correctly.

//the console log on line 14 isn't targeting the values in the array - using the index number to hopefully make the call, stealing the index number, store to plug and chug

// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { STOP_PATH } from '../global'

export default function Schedule (props) {

    // const [theStopID, setTheStopID] = useState(null)
    //AXIOS call to get the stop NAME, based on STOP_PATH url + id # from schedule's axios call
    // const [stopName, setStopName] = useState(null)
    // console.log(props.schedule)
    // useEffect (() => {
    //     const getStopName = async () => {
    //     const theResponse = await axios.get(`${STOP_PATH}${props.schedule.relationships.stop.data.id}`)
    //     console.log(theResponse)
    //     setStopName(theResponse.data.data)
    // }
    // getStopName()}, [props.schedule.relationships.stop.data.id])
    // inside that array, you can optionally pass dependencies, [prop, state]



    if (!props.schedule) {
        return <h2>Loading...</h2>
    } 

    else {
    return (
    <div id="ScheduleContent">
    
        {
            props.schedule.map((value, i)=> {
            // setTheStopID({...theStopID, [i]: value.relationships.stop.data.id })
            // console.log(theStopID)


                if (value.attributes.arrival_time !== null && value.attributes.direction_id === 1){
                    return (
                        <div     key={value.id}      className="ScheduleData">

                        <h4>Stop ID: {value.relationships.stop.data.id}</h4>
                        {/* <h4>Stop Name: {stopName.attributes.name}</h4> */}
                        <h4>Arrival Time: {value.attributes.arrival_time.slice(11,16)}</h4>
                        <h4>Direction: Inbound</h4>
                        <br/>
                        </div>
                )}

                else if (value.attributes.arrival_time !== null && value.attributes.direction_id === 0) { 
                    return (
                        <div     key={value.id}      className="ScheduleData">
                        <h4>Stop ID: {value.relationships.stop.data.id}</h4>
                        <h4>Arrival Time: {value.attributes.arrival_time.slice(11,16)}</h4>
                        <h4>Direction: Outbound</h4>
                        <br/>
                        </div>
                        )}
            })
        }

    </div>
    )}
}