import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Profile from './component/Profile'
import Hiring from './component/Main-hiring'
import Portfolio from './component/Portfolio'

function App() {

  return (
    <div className="App">
      <header>
        <h1 className='My-profile'>My Profile</h1>
      </header>
      <Profile />
      <Hiring />
      <Portfolio />
      <footer>
        <div className='footer-item'><div className='icon-item-img'><img src="./src/image/email.png" alt="email-icon" className='img-icon'/></div><p>seed.peeranat@gmail.com</p></div>
        <div className='footer-item'><p>&copy; Copyright 2023 | seed.peeranat</p></div>
        <div className='footer-item'>
          <div className='icon-item-img'>
            <a href='https://www.facebook.com/seed.nardarn' target="_blank"> <img src="./src/image/facebook.png" alt="facebook-icon" className='img-icon'/> </a>
          </div>
          <div className='icon-item-img'>
            <a href='https://twitter.com/pzzzeeeddd' target="_blank"> <img src="./src/image/twitter.png" alt="twiter-icon" className='img-icon'/> </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
