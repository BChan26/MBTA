export default function The65 ({formState, handleChange, handleSubmit, newValue, setNewValue, getSchedule, schedule}) {

const The651 = document.getElementById('The651')
console.log(The651)

    return (

        <div>
        
        <form onSubmit={handleSubmit}>
                <label htmlFor="stopID">Bus Stop: </label>
                <select id="stopID"
                        onChange={handleChange}
                        value={formState.stopID}
                        >
                <option value=""></option>
                {/* Inbound */}
                <option value="1026" id="The651">1.  (Inbound) Chestnut Hill Ave @ Veronica Smith Ctr</option>
                <option value="919" id="The651"> 2.  (Inbound) Washington St opp Waldo Terrace</option>
                <option value="1268" id="The651">3.  (Inbound) Washington St @ Sheperd St</option>
                <option value="1269">4.  (Inbound) Washington St @ Snow St</option>
                <option value="1270">5.  (Inbound) Washington St @ Monastery Rd</option>
                <option value="1272">6.  (Inbound) Washington St @ Euston St</option>
                <option value="1273">7.  (Inbound) Washington St @ Comm Ave</option>
                <option value="1274">8.  (Inbound) Washington St @ Corey Rd</option>
                <option value="1275">9.  (Inbound) Washington St @ Evans Rd</option>
                <option value="1276">10. (Inbound) Washington St @ Beacon St</option>
                <option value="1277">11. (Inbound) 684 Washington St </option>
                <option value="1278">12. (Inbound) Washington St @ Winthrop Path</option>
                <option value="1279">13. (Inbound) Washington St @ Gardner Rd</option>
                <option value="1280">14. (Inbound) Washington St @ Gardner Path</option>
                <option value="1281">15. (Inbound) Washington St @ Greenough Circle</option>
                <option value="1282">16. (Inbound) Washington St @ Cypress St</option>
                <option value="1283">17. (Inbound) Washington St @ Harvard St</option>
                <option value="1555">18. (Inbound) Washington St @ Walnut St</option>
                <option value="1556">19. (Inbound) 678 Brookline Ave opp Pearl St</option>
                <option value="1557">20. (Inbound) Brookline Ave opp Aspinwall Ave</option>
                <option value="1558">21. (Inbound) Brookline Ave @ Francis St</option>
                <option value="1559">22. (Inbound) Brookline Ave @ Deaconess Rd</option>
                <option value="1804">23. (Inbound) Brookline Ave @ Longwood Ave</option>
                <option value="1805">24. (Inbound) Brookline Ave opp Short St</option>
                <option value="1806">25. (Inbound) Brookline Ave @ The Fenway</option>
                <option value="9441">26. (Inbound) Brookline Ave @ Boylston St</option>
                <option value="1562">27. (Inbound) 132 Brookline Ave opp Fullerton St</option>
                <option value="1563">28. (Inbound) Brookline Ave @ Jersey St</option>
                <option value="1564">29. (Inbound) Brookline Ave @ Newbury St</option>
                <option value="899"> 30. (Inbound) Kenmore Station</option>
                {/* Outbound */}
                <option value="899"> 1.  (Outbound) Kenmore Station</option>
                <option value="8993">2.  (Outbound) Brookline Ave opp Newbury St</option>
                <option value="1518">3.  (Outbound) Brookline Ave opp Jersey St</option>
                <option value="1519">4.  (Outbound) Brookline Ave @ Fullerton St</option>
                <option value="1520">5.  (Outbound) Brookline Ave @ Park Dr</option>
                <option value="1777">6.  (Outbound) Brookline Ave @ Pilgrim Rd</option>
                <option value="1778">7.  (Outbound) Brookline Ave @ Short St</option>
                <option value="1521">8.  (Outbound) Brookline Ave @ Longwood Ave</option>
                <option value="1523">9.  (Outbound) Brookline Ave @ Francis St</option>
                <option value="1524">10. (Outbound) Brookline Ave @ Aspinwall Ave</option>
                <option value="1525">11. (Outbound) Brookline Ave @ Pearl St</option>
                <option value="1526">12. (Outbound) Washington St @ Pearl St</option>
                <option value="1286">13. (Outbound) Washington St @ Harvard St</option>
                <option value="1287">14. (Outbound) Washington St @ School St</option>
                <option value="1288">15. (Outbound) Washington St opp Greenough St</option>
                <option value="1289">16. (Outbound) Washington St @ Griggs St</option>
                <option value="1290">17. (Outbound) Washington St opp Gardner Rd</option>
                <option value="1291">18. (Outbound) Washington St @ Fairbanks St</option>
                <option value="1292">19. (Outbound) Washington St @ Beacon St</option>
                <option value="1293">20. (Outbound) Washington St @ Bartlett St</option>
                <option value="1294">21. (Outbound) Washington St @ Corey Rd</option>
                <option value="1295">22. (Outbound) Washington St @ Comm Ave</option>
                <option value="1296">23. (Outbound) Washington St opp Euston Rd</option>
                <option value="1298">24. (Outbound) Washington St @ Monastery Rd</option>
                <option value="1299">25. (Outbound) Washington St opp Snow St</option>
                <option value="1300">26. (Outbound) Washington St opp Shepard St</option>
                <option value="1301">27. (Outbound) 7 Winship St</option>
                <option value="1994">28. (Outbound) Winship St @ Union St</option>
                <option value="1026">29. (Outbound) Chestnut Hill Ave @ Veronica Smith Ctr</option>
                </select>
        
                <button onClick={(event)=> {
        
                    // console.log(formState.stopID)
                    setNewValue(formState.stopID)
                    // console.log(newValue)
                    handleSubmit()
                    getSchedule(`${setNewValue}`)
                    event.preventDefault()
                }}>Get Times</button>
        </form>


        <div id="ScheduleContent">
        {
            schedule.map((value)=> {

                if (value.attributes.arrival_time !== null 
                    && 
                    value.attributes.direction_id === 1
                    &&
                    value.relationships.route.data.id == 65
                    ){
                    return (
                        <div     key={value.id}      className="ScheduleData">
                        {/* <h4> {The651.innerText} </h4> */}
                        {/* <h4>Bus Line: {value.relationships.route.data.id}</h4> */}
                        <h4>Arrival Time: {value.attributes.arrival_time.slice(11,16)}</h4>
                        {/* <h4>Direction: Inbound</h4> */}
                        <br/>
                        </div>
                )}

                else if (value.attributes.arrival_time !== null 
                         && 
                         value.attributes.direction_id === 0
                         && 
                         value.relationships.route.data.id == 65
                         ) { 
                    return (
                        <div     key={value.id}      className="ScheduleData">
                        {/* <h4> {The651.innerText} </h4> */}
                        {/* <h4>Bus Line: {value.relationships.route.data.id}</h4> */}
                        <h4>Arrival Time: {value.attributes.arrival_time.slice(11,16)}</h4>
                        {/* <h4>Direction: Outbound</h4> */}
                        <br/>
                        </div>
                        )}
            })
        }

    </div>






        
        </div>)
            }