export default function Inbound (props) {
if (!props.ibuses) {
        return <h2>Loading...</h2>
    } 

    else {
    return (
    <div id="InboundContent">

        {
            props.ibuses.map((value)=> {

            if (value.attributes.arrival_time === null && value.attributes.departure_time === null ) {
                return(<div></div>)
            }
            else {return (
                <div     key={value.id}      className="BusData">
                    
                <h3>Bus Line: {value.relationships.route.data.id}</h3>
                <h4>Arrival Time: {value.attributes.arrival_time} </h4>
                <h4>Departure Time: {value.attributes.departure_time} </h4>

                </div>
            )}
            })
        }
    </div>
    )}
}

// Goal 1(Remove Arrival/Departure if value=null): if (value.attributes.arrival_time = null) {}

//Goal 2(if value.attributes.schedule_relationship = skipped) {}

//Goal 3 (if value.attributes.direction_id=0), <h2>Direction: Outbound</h2>

// Goal 4(Only 65 Bus): if (value.relationships.route.data.id=65) {}