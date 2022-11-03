import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

import { BASE_URL } from './global'
import { INFO_PATH } from './global'
import { TIME_PATH } from './global'

import Nav from './components/Nav'
import Banner from './components/Banner'
import Inbound from './components/Inbound'
import Outbound from './components/Outbound'
import './App.css';



function App() {

//Axios call to get ETA for bus INbound, based on Week 5 Monday API Lesson
const [ibuses, setInbound] = useState([])
useEffect(() => {
  const getInbound = async () => {
    const response = await axios.get(`${TIME_PATH}1026`)
    console.log(response)
    // console.log(response.data.data)
    setInbound(response.data.data)
  }
getInbound()}, [])

//Axios call to get ETA for bus OUTbound
const [obuses, setOutbound] = useState([])
useEffect(() => {
  const getOutbound = async () => {
    const response = await axios.get(`${TIME_PATH}1287`)
    console.log(response)
    // console.log(response.data.data)
    setOutbound(response.data.data)
  }
getOutbound()}, [])






  return (
    <div className="App">
      
    <div id="HeaderOrganization">
      <div id="Banner-App">
        <Banner/>
      </div>
      <div id="Directory-Nav">
      <Nav/>
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

    </Routes>
    </main>
  </div>
  );
}

export default App;
