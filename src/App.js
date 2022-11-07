import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Coindetails from './components/Coindetails'
import Exchanges from './components/Exchanges'
import Coins from './components/Coins'
import Header from './components/Header'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'






const App = () => {


  return (
    <>
    <Router>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin/:id" element={<Coindetails />} />

      </Routes>
    </Router>
    </>


    )
}

export default App