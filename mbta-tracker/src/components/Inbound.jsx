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
        {/* <div> */}
        {/* <h4>Current Time: {props.time}</h4> */}
        {/* </div> */}

        {
            props.ibuses.map((value)=> {

                if (value.attributes.arrival_time === null && value.attributes.departure_time === null ) {
                    return(<div></div>)}

                else if (value.attributes.arrival_time === null && value.attributes.departure_time !== null ) {
                    // console.log(props.time)
                    // console.log(props.time.slice(0,2))
                    // console.log(props.time.slice(3,6))
                    
                    // console.log(value.attributes.departure_time.slice(11,13))
                    // console.log(value.attributes.departure_time.slice(14,16))

                    if (props.time.slice(0,2) == value.attributes.departure_time.slice(11,13)){
                        return (
                            <div     key={value.id}      className="BusData">
                            
                            {/* <h4>Arrival Time: {value.attributes.departure_time.slice(11,16)}</h4> */}
                            <h4>{value.attributes.departure_time.slice(14,16) - props.time.slice(3,6) } minutes away</h4>
    
                            </div>
                        )
                    }
                    
                    else if (props.time.slice(0,2) < value.attributes.departure_time.slice(11,13)) {
                        return (
                            <div     key={value.id}      className="BusData">

                            {/* <h4>Arrival Time: {value.attributes.departure_time.slice(11,16)}</h4> */}
                            <h4>{(parseInt(value.attributes.depature_time.slice(14,16))+60) - props.time.slice(3,6) } minutes away</h4>
    
                            </div>
                        )
                    }
                }

            })
        }
    </div>
    )}
}
//determine the type of data we have for line 35 (string, number, etc)
//try to parseInt() both of the values to ensure they're numbers, then subtract