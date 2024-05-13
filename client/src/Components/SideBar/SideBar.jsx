import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function SideBar() {
  


  const users = JSON.parse(localStorage.getItem('User'))
    const userId = users.data._id





  const navigate = useNavigate()
  const user = JSON.parse(window.localStorage.getItem('User'))
  const refreshPage = () => {
    window.location.reload(false)
    
}
  const logOut = () => {
    window.localStorage.removeItem('loginState')
    window.localStorage.clear()
    
  }

  return (
    <>
    <div>
    
<div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-full w-full max-w-[20vw] p-4 shadow-xl shadow-blue-gray-900/5">
  <div className="mb-2 p-4">
    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">Code Blog</h5>
  </div>
  <div>
  <div class="flex items-center">
    <div class="relative">
        <img class="h-16 w-16 rounded-full object-cover" src='https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D' alt="Avatar"/>
        
        
        <div class="absolute inset-0 rounded-full shadow-inner"></div>
    </div>
    <div class="ml-4">
        <h2 class="font-bold text-gray-800 text-lg">{user.data.userName}</h2>
        <p class="text-gray-600">Software Engineer</p>
    </div>
</div>
  </div>
  <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
    <div   className="flex items-center w-full  rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className="grid place-items-center mr-4">
        
      </div>
      <Link className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"  to={'/home'}>Home</Link>
    </div>
    <div   className="flex items-center w-full  rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className="grid place-items-center mr-4">
        
      </div>
      <Link className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none" to={'/addblog'}>Add Blog</Link>
    </div>
    <div role="button"  className="flex items-center w-full  rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className="grid place-items-center mr-4">
        
      </div><Link to={'/categories'} className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">categories</Link> <div className="grid place-items-center ml-auto justify-self-end">
        <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full" >
          <span className="">{window.localStorage.getItem('catsCount')}</span>
        </div>
      </div>
    </div>
    <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className="grid place-items-center mr-4">
        
      </div>Profile
    </div>
    <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className="grid place-items-center mr-4">
        
      </div>Settings
    </div>
    <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
      <div className="grid place-items-start mr-4">
        
      </div>
      <button onClick={() => {refreshPage() ;logOut()}} className=' w-full text-start'>Log out</button>
    </div>
  </nav>
</div>

<div className="w-full pt-5 px-4 mb-8 mx-auto ">
    <div className="text-sm text-gray-700 py-1">
        Made with <a className="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/react/sidebar?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" className="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
    </div>
</div>
        </div>
        </>
  )
}

export default SideBar