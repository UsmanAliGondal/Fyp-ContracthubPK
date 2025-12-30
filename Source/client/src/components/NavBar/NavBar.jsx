import React from 'react'
import "../Dashboard/Dashboard.css"
const NavBar = () => {
  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <div className="brand">
             <span>ContracthubPK</span>
          </div>
          <div className="menu">
            <span className="active">Dashboard</span>
            <span>Contracts</span>
            <span>Activities</span>
            <span>Counterparties</span>
            <span>Reports</span>
          </div>
        </div>
        <div className="avatar"></div>
      </div> 
    </>
  )
}

export default NavBar
