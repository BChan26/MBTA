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

//Axios call to get ETA for bus departure, based on Week 5 Monday API Lesson
const [movies, setMovies] = useState([])

useEffect(() => {
  const getMovies = async () => {
    const response = await axios.get(`${TIME_PATH}1026`)
    console.log(response.data.data)
    setMovies(response.data.data)
  }
getMovies()
}, [])






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
        <Route exact path="Outbound" element={<Outbound
                                                movies={movies}
                                                              />}/>
        <Route exact path="Inbound" element={<Inbound
                                                movies={movies}
                                                      />}/>
    </Routes>
    </main>
  </div>
  );
}

export default App;
