export default function Inbound (props) {
    

    return (
    <div id="InboundContent">
        
        {
                props.ibuses.map((value)=> (
                    <div     key={value.id}      className="BusData">
                    
                    <h3>Bus Line: {value.relationships.route.data.id}</h3>
                    <h4>Arrival Time: {value.attributes.arrival_time} </h4>
                    <h4>Departure Time: {value.attributes.departure_time} </h4>

                    </div>
                ))
            }

    </div>
    )}