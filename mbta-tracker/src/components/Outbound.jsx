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
        <div>Arrival Times At The Library</div>






    {
    props.obuses.map((value)=> {

    if (value.attributes.arrival_time === null && value.attributes.departure_time === null ) {
        return(<div></div>)}

    else if (value.attributes.arrival_time !== null && value.attributes.departure_time !== null ) {
                    // console.log(props.time)
                    // console.log(props.time.slice(0,2))
                    console.log(props.time.slice(3,6))
                    
                    // console.log(value.attributes.arrival_time.slice(11,16))
                    // console.log(value.attributes.arrival_time.slice(11,13))
                    console.log(value.attributes.arrival_time.slice(14,16)+60)
                    console.log((value.attributes.arrival_time.slice(14,16)+60) - props.time.slice(3,6))

                    if (props.time.slice(0,2) == value.attributes.arrival_time.slice(11,13)){
                        return (
                            <div     key={value.id}      className="BusData">
                            
                            {/* <h4>Arrival Time: {value.attributes.arrival_time.slice(11,16)}</h4> */}
                            <h4>{value.attributes.arrival_time.slice(14,16) - props.time.slice(3,6) } minutes away</h4>
    
                            </div>
                        )
                    }
                    
                    else if (props.time.slice(0,2) < value.attributes.arrival_time.slice(11,13)) {
                        return (
                            <div     key={value.id}      className="BusData">

                            {/* <h4>Arrival Time: {value.attributes.departure_time.slice(11,16)}</h4> */}
                            <h4>{(parseInt(value.attributes.arrival_time.slice(14,16))+60) - props.time.slice(3,6) } minutes away</h4>
    
                            </div>
                        )
                    }
    }

    })
}
</div>
)}
}