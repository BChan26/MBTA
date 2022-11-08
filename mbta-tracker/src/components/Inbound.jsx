export default function Inbound (props) {
if (!props.ibuses) {
        return <h2>Loading...</h2>
    } 

    else {
    return (
    <div id="InboundContent">

        <div className="map">
            <img src="https://i.postimg.cc/ZYs50dYk/Screen-Shot-2022-11-03-at-2-35-04-PM.png" alt="Bus Map Origin" id="inboundBus"/>
        </div>
        <div>
            Departure Times from Brighton Center
        </div>
        <div>
        <h4>Current Time: {props.time}</h4>
        </div>

        {
            props.ibuses.map((value)=> {

                if (value.attributes.arrival_time === null && value.attributes.departure_time === null ) {
                    return(<div></div>)}

                else if (value.attributes.arrival_time === null && value.attributes.departure_time !== null ) {
                    // console.log(value.attributes.departure_time.slice(11,16))
                    // console.log(props.time)
                    return (
                        <div     key={value.id}      className="BusData">
                        
                        {/* <h3>{value.relationships.route.data.id} Bus</h3> */}
                        {/* <h4>{value.attributes.departure_time.slice(11,16) - props.time} minutes away</h4> */}

                        <h4>Arrival Time: {value.attributes.departure_time.slice(11,16)}</h4>

                        </div>
                )}

            })
        }
    </div>
    )}
}
//determine the type of data we have for line 35 (string, number, etc)
//try to parseInt() both of the values to ensure they're numbers, then subtract