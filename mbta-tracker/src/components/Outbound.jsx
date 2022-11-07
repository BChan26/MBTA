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
                props.obuses.map((value)=> (
                    <div     key={value.id}      className="BusData">

                    <h4>{value.attributes.arrival_time.slice(11,16)} </h4>

                    </div>
                ))
            }

    </div>
    )}
}