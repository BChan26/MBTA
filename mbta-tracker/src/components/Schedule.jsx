export default function Schedule (props) {

    if (!props.schedule) {
        return <h2>Loading...</h2>
    } 

    else {
    return (
    <div id="ScheduleContent">
    
        {
            props.schedule.map((value)=> {


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