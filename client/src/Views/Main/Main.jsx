import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'

function Main( props) {
  return (
    <>
    <div className=' flex flex-row'>
    <SideBar/>
    <div>{props.view}</div>
    </div>
    
    </>
  )
}

export default Main