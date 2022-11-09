//Passing down obuses and time as props
export default function Outbound (props) {
    
    if (!props.obuses) {
        return <h2>Loading...</h2>
    } 

    else {
    return (
    <div id="OutboundContent">
    
        <div className="map">
            <img src="https://i.postimg.cc/dtKwhjMx/Screen-Shot-2022-11-03-at-2-38-53-PM.png" alt="Bus Map Origin" id="outboundBus"/>
        </div>

        <div>
            Arrival Times At The Library To Go Home To Brighton Center
        </div>

    {
        props.obuses.map((value)=> {
            
            //If the arrival time and departure time are null, return nothing (it's a "ghost" bus)
            if (value.attributes.arrival_time === null && value.attributes.departure_time === null ) {
            return(<div></div>)}

            else if (value.attributes.arrival_time !== null && value.attributes.departure_time !== null ) {
                // the following are console logs to isolate the current time's hh & mm w/ & w/o the colon    
                // console.log(props.time)
                // console.log(props.time.slice(0,2))
                // console.log(props.time.slice(3,6))
                    
                // the following are console logs to isolate the bus time's hh & mm w/ & w/o the colon
                // console.log(value.attributes.arrival_time.slice(11,16))
                // console.log(value.attributes.arrival_time.slice(11,13))
                // console.log(value.attributes.arrival_time.slice(14,16)+60)
                // console.log((value.attributes.arrival_time.slice(14,16)+60) - props.time.slice(3,6))

                //ParseInt() to ensure all values are #'s
                //If the arrival time's hour is equal to the current time's hour, subtract min-min for minutes away
                if (parseInt(value.attributes.arrival_time.slice(11,13)) == parseInt(props.time.slice(0,2))){
                    return (
                        <div     key={value.id}      className="BusData">
                        
                        <h4>{parseInt(value.attributes.arrival_time.slice(14,16)) - parseInt(props.time.slice(3,6)) } minutes away</h4>
    
                        </div>
                        )
                    }
                    
                //If the arrival time's hour - current time's hour is 1hr diff, subtract (min+60)-min for minutes away
                else if (parseInt(value.attributes.arrival_time.slice(11,13)) - parseInt(props.time.slice(0,2)) == 1) {
                    return (
                        <div     key={value.id}      className="BusData">

                        <h4>{(parseInt(value.attributes.arrival_time.slice(14,16))+60) - parseInt(props.time.slice(3,6)) } minutes away</h4>
    
                        </div>
                        )
                    }

                //If the arrival time's hour - current time's hour is 2hr diff, subtract (min+120)-min for minutes away
                else if (parseInt(value.attributes.arrival_time.slice(11,13)) - parseInt(props.time.slice(0,2)) == 2) {
                    return (
                        <div     key={value.id}      className="BusData">

                        <h4>{(parseInt(value.attributes.arrival_time.slice(14,16))+120) - parseInt(props.time.slice(3,6)) } minutes away</h4>
    
                        </div>
                        )
                    }
            }
        })
    }
    </div>
    )}
}