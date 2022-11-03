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

        {
            props.ibuses.map((value)=> {

                if (value.attributes.arrival_time === null && value.attributes.departure_time === null ) {
                    return(<div></div>)}

                else if (value.attributes.arrival_time === null && value.attributes.departure_time !== null ) {
                    return (
                        <div     key={value.id}      className="BusData">
                        
                        {/* <h3>{value.relationships.route.data.id} Bus</h3> */}
                        <h4>{value.attributes.departure_time.slice(11,16)} </h4>

                        </div>
                )}

            })
        }
    </div>
    )}
}


//Goal 3 (if value.attributes.direction_id=0), <h2>Direction: Outbound</h2>

// Goal 4(Only 65 Bus): if (value.relationships.route.data.id=65) {}