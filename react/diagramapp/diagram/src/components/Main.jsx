import React from 'react'

import Sidebar from './Sidebar'
import "./main.css"
import Diagram from './Diagram'

const Main = () => {
  return (
    <div className="main" 
    > 
      <Sidebar/>
      <Diagram/>
      
    </div>
  )
}

export default Main
