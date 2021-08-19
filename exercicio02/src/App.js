import React from 'react'
import './App.css'
import Corpo from './components/corpo/Corpo'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

export default function App() {

   return(
      <>
      <div className="container">
        <h1>Resolution exercício</h1>
        <Header />
        <Corpo />
        <Footer />
      </div>

      </>
)
}