//Deconstructed each of the props being passed down, for more specificity
export default function The65 ({formState, handleChange, handleSubmit, newValue, setNewValue, getSchedule, schedule, time}) {
    if (!schedule) {
        return <h2>Loading...</h2>
    } 

    else {
    return (

    <div>
        
        <form onSubmit={handleSubmit}>

                <label htmlFor="stopID">Bus Stop: </label>

                {/* With the id stopID, upon a change (onchange) it connects to the handlechange, with a new value */}
                <select id="stopID"
                        onChange={handleChange}
                        value={formState.stopID}
                                                >
                
                <option value=""></option>
                {/* Inbound */}
                <option id="1026" value="1026">1.  (Inbound) Chestnut Hill Ave @ Veronica Smith Ctr</option>
                <option id="919" value="919"> 2.  (Inbound) Washington St opp Waldo Terrace</option>
                <option id="1268" value="1268">3.  (Inbound) Washington St @ Sheperd St</option>
                <option id="1269" value="1269">4.  (Inbound) Washington St @ Snow St</option>
                <option id="1270" value="1270">5.  (Inbound) Washington St @ Monastery Rd</option>
                <option id="1272" value="1272">6.  (Inbound) Washington St @ Euston St</option>
                <option id="1273" value="1273">7.  (Inbound) Washington St @ Comm Ave</option>
                <option id="1274" value="1274">8.  (Inbound) Washington St @ Corey Rd</option>
                <option id="1275" value="1275">9.  (Inbound) Washington St @ Evans Rd</option>
                <option id="1276" value="1276">10. (Inbound) Washington St @ Beacon St</option>
                <option id="1277" value="1277">11. (Inbound) 684 Washington St </option>
                <option id="1278" value="1278">12. (Inbound) Washington St @ Winthrop Path</option>
                <option id="1279" value="1279">13. (Inbound) Washington St @ Gardner Rd</option>
                <option id="1280" value="1280">14. (Inbound) Washington St @ Gardner Path</option>
                <option id="1281" value="1281">15. (Inbound) Washington St @ Greenough Circle</option>
                <option id="1282" value="1282">16. (Inbound) Washington St @ Cypress St</option>
                <option id="1283" value="1283">17. (Inbound) Washington St @ Harvard St</option>
                <option id="1555" value="1555">18. (Inbound) Washington St @ Walnut St</option>
                <option id="1556" value="1556">19. (Inbound) 678 Brookline Ave opp Pearl St</option>
                <option id="1557" value="1557">20. (Inbound) Brookline Ave opp Aspinwall Ave</option>
                <option id="1558" value="1558">21. (Inbound) Brookline Ave @ Francis St</option>
                <option id="1559" value="1559">22. (Inbound) Brookline Ave @ Deaconess Rd</option>
                <option id="1804" value="1804">23. (Inbound) Brookline Ave @ Longwood Ave</option>
                <option id="1805" value="1805">24. (Inbound) Brookline Ave opp Short St</option>
                <option id="1806" value="1806">25. (Inbound) Brookline Ave @ The Fenway</option>
                <option id="9441" value="9441">26. (Inbound) Brookline Ave @ Boylston St</option>
                <option id="1562" value="1562">27. (Inbound) 132 Brookline Ave opp Fullerton St</option>
                <option id="1563" value="1563">28. (Inbound) Brookline Ave @ Jersey St</option>
                <option id="1564" value="1564">29. (Inbound) Brookline Ave @ Newbury St</option>
                {/* Outbound */}
                <option id="899" value="899"> 1.  (Outbound) Kenmore Station</option>
                <option id="8993" value="8993">2.  (Outbound) Brookline Ave opp Newbury St</option>
                <option id="1518" value="1518">3.  (Outbound) Brookline Ave opp Jersey St</option>
                <option id="1519" value="1519">4.  (Outbound) Brookline Ave @ Fullerton St</option>
                <option id="1520" value="1520">5.  (Outbound) Brookline Ave @ Park Dr</option>
                <option id="1777" value="1777">6.  (Outbound) Brookline Ave @ Pilgrim Rd</option>
                <option id="1778" value="1778">7.  (Outbound) Brookline Ave @ Short St</option>
                <option id="1521" value="1521">8.  (Outbound) Brookline Ave @ Longwood Ave</option>
                <option id="1523" value="1523">9.  (Outbound) Brookline Ave @ Francis St</option>
                <option id="1524" value="1524">10. (Outbound) Brookline Ave @ Aspinwall Ave</option>
                <option id="1525" value="1525">11. (Outbound) Brookline Ave @ Pearl St</option>
                <option id="1526" value="1526">12. (Outbound) Washington St @ Pearl St</option>
                <option id="1286" value="1286">13. (Outbound) Washington St @ Harvard St</option>
                <option id="1287" value="1287">14. (Outbound) Washington St @ School St</option>
                <option id="1288" value="1288">15. (Outbound) Washington St opp Greenough St</option>
                <option id="1289" value="1289">16. (Outbound) Washington St @ Griggs St</option>
                <option id="1290" value="1290">17. (Outbound) Washington St opp Gardner Rd</option>
                <option id="1291" value="1291">18. (Outbound) Washington St @ Fairbanks St</option>
                <option id="1292" value="1292">19. (Outbound) Washington St @ Beacon St</option>
                <option id="1293" value="1293">20. (Outbound) Washington St @ Bartlett St</option>
                <option id="1294" value="1294">21. (Outbound) Washington St @ Corey Rd</option>
                <option id="1295" value="1295">22. (Outbound) Washington St @ Comm Ave</option>
                <option id="1296" value="1296">23. (Outbound) Washington St opp Euston Rd</option>
                <option id="1298" value="1298">24. (Outbound) Washington St @ Monastery Rd</option>
                <option id="1299" value="1299">25. (Outbound) Washington St opp Snow St</option>
                <option id="1300" value="1300">26. (Outbound) Washington St opp Shepard St</option>
                <option id="1301" value="1301">27. (Outbound) 7 Winship St</option>
                <option id="1994" value="1994">28. (Outbound) Winship St @ Union St</option>
                </select>
        
                {/* Upon the button onclick, need event.preventDefault() to prevent refreshing of dropdown, setting a new value with value above, running the handlesubmit, and running the Axios call with getSchedule with the new value */}
                <button onClick={(event)=> {
                    event.preventDefault()
                    // console.log(formState.stopID)
                    setNewValue(formState.stopID)
                    // console.log(newValue)
                    handleSubmit()
                    getSchedule(`${setNewValue}`)

                }}>Get Times</button>
        </form>

        <div>
        <img src='https://i.postimg.cc/jdHynjxY/65-Bus-Stops-Inbound-Outbound.png' alt="Bus Stop Map" id="BusMap"/>
        </div>

        <div id="ScheduleContent">
        {
            //mapping out all values from the original axios call, adding index as parameter for key for each
            schedule.map((value, index)=> {

                //if both arrival and departure time are null, it's a "ghost bus" so return nothing
                //the mapped out value still needs a key, even if it's an "empty" div, to avoid error
                if (value.attributes.arrival_time === null 
                    && 
                    value.attributes.departure_time === null) 
                        {return(<div key={index}></div>)}

                //if there's a departure time and it's a bus for the 65 route
                if (value.attributes.departure_time !== null
                    &&
                    value.relationships.route.data.id == 65)
                    
                    {
                        //If departure time's hour = current time's hour, subtract min - min to get minutes away
                        if (parseInt(value.attributes.departure_time.slice(11,13)) == parseInt(time.slice(0,2))){
                            return (
                                <div     key={index}      className="BusData">
                                
                                <h4>{parseInt(value.attributes.departure_time.slice(14,16)) - parseInt(time.slice(3,6)) } minutes away</h4>
        
                                </div>
                            )
                        }
                        
                        //If departure time's hour - current time's hour = 1, subtract (min+60) - min to get minutes away
                        else if (parseInt(value.attributes.departure_time.slice(11,13)) - parseInt(time.slice(0,2)) == 1) {
                            return (
                                <div     key={index}      className="BusData">
    
                                <h4>{(parseInt(value.attributes.departure_time.slice(14,16))+60) - time.slice(3,6) } minutes away</h4>
        
                                </div>
                            )
                        }
    
                        //If departure time's hour - current time's hour = 2, subtract (min+120) - min to get minutes away
                        else if (parseInt(value.attributes.departure_time.slice(11,13)) - parseInt(time.slice(0,2)) == 2) {
                                return (
                                    <div     key={index}      className="BusData">
        
                                    <h4>{(parseInt(value.attributes.departure_time.slice(14,16))+120) - time.slice(3,6) } minutes away</h4>
            
                                    </div>
                                )
                        }

                    }

                
            })
        }
        </div>

        
    </div>
    )
    }
}