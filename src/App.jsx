import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'

import Home from './components/home';
import Destination from './components/destination';
import Crew from './components/crew';
import Technology from './components/technology';
import Nav from './components/nav';

function App() {
    
    return (
        <Router>
                <div className="App">
                <Nav />
                <Routes>
                    <Route exact path='/' element={ <Home /> }></Route>
                    <Route exact path='/destination' element={ <Destination /> }></Route>
                    <Route exact path='/crew' element={ <Crew /> }></Route>
                    <Route exact path='/technology' element={ <Technology /> }></Route>
                </Routes>
        </div>
        </Router>
    )
}

export default App
