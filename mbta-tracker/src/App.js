import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

import { SCHEDULE_PATH } from './global'

import { TIME_PATH } from './global'

import Nav from './components/Nav'
import Banner from './components/Banner'
import Inbound from './components/Inbound'
import Outbound from './components/Outbound'
import Schedule from './components/Schedule'
import './App.css';



function App() {

//Axios call to get ETA for bus INbound, based on Week 5 Monday API Lesson
//useState is a hook that's tracking changes in the component
//ibuses is my current state (where I'm storing my property value)
//setInbound is the function to update ibuses
//useEffect is another hook that's performing a side effect AKA another job/task
//we've created the function getInbound to make the axios call, then running the state updater function setInbound, to give a new value to ibuses.
//then ibuses is passed down as a prop to my component .jsx file through routes
const [ibuses, setInbound] = useState([])
useEffect(() => {
  const getInbound = async () => {
    const response = await axios.get(`${TIME_PATH}1026`)
    // console.log(response.data.data)
    setInbound(response.data.data)
  }
getInbound()}, [])
//inside that array, you can optionally pass dependencies, [prop, state]



//Axios call to get ETA for bus OUTbound
const [obuses, setOutbound] = useState([])
useEffect(() => {
  const getOutbound = async () => {
    const response = await axios.get(`${TIME_PATH}1287`)
    // console.log(response.data.data)
    setOutbound(response.data.data)
  }
getOutbound()}, [])


//Google Form
const initialState = {stopID: ''}
//state value stored in formState, with setFormState updating that value, useState tracks changes with the initial value of formState as initialState

const [formState, setFormState] = useState (initialState)
//goal of handlechange: to connect the form fields to state

const handleChange = (event) => {
  setFormState({...formState, [event.target.id]:event.target.value})
}

//the ...formState helps us identify what we're going to be changing
  //The ... basically "spreads" the object properties, along with their corresponding values, inside a new object literal { }. 
  //Then we are using [ event.target.id ] to compute the property name we would like to replace in said object, again--with its corresponding value event.target.value.
    //we're setting the value for our property with the colon, since it's an object
const handleSubmit = (event) => {
  event.preventDefault();
  setFormState({...initialState, [event.target.id]:event.target.value})
}





//Axios call to get schedule for 57 bus
const [schedule, setSchedule] = useState(null)
const [newValue, setNewValue] = useState('')
useEffect(() => {
  const getSchedule = async () => {
    const response = await axios.get(`${SCHEDULE_PATH}${newValue}`)
    // console.log(response)
    console.log(response.data)
    setSchedule(response.data.data)
  }
getSchedule()}, [newValue])
//inside that array, you can optionally pass dependencies, [prop, state]





  return (
    <div className="App">
      
    <div id="HeaderOrganization">
      <div id="Banner-App">
        <Banner/>
      </div>
      <div id="Directory-Nav">
      <Nav  formState={formState} 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            newValue={newValue}
            setNewValue={setNewValue}
            // getSchedule={getSchedule}
                                      />
      </div>

    </div>


    <main className="Main-header">
    <Routes>

    <Route exact path="Inbound" element={<Inbound
                                                ibuses={ibuses}
                                                      />}/>

    <Route exact path="Outbound" element={<Outbound
                                                obuses={obuses}
                                                              />}/>

    <Route exact path="Schedule" element={<Schedule
                                                schedule={schedule}
                                                      />}/>

    </Routes>
    </main>
  </div>
  );
}

export default App;
