import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/DashBoardV/Content'
import './App.css'

const App = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className="dashboard--content">
        <Content />
      </div>
    </div>
  )
}

export default App