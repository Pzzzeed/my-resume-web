import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Homepage from './Page/Homepage'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import PortfolioPage from './Page/Portfoliopage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/portfolio" element={<PortfolioPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
