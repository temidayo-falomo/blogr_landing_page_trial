import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Features from './Features'
import Footer from './components/Footer'

function App () {
    return (
        <>
        <Router>
            <Header />
            <Features />
            <Footer />
         </Router>
        </>
    )
}

export default App