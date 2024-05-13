import './App.css'
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Login from './Views/Login/Login';
import Main from './Views/Main/Main';
import Home from './Views/DashBoard/Views/Home/Home';
import AddBlog from './Views/DashBoard/Views/Add Blog/AddBlog';
import React from 'react';
import Categories from './Views/DashBoard/Views/Categories/Categories';
import SignUp from './Views/SignUp/SignUp';
import ForgetPassword from './Views/ForgetPassword/ForgetPassword';

function App() {
  
  const [loginState , setLoginState] = React.useState(false)

  React.useEffect(() => {
    
    let checkState = window.localStorage.getItem('loginState')
    setLoginState(checkState)
  },[loginState])

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/'  element={loginState  ? <Main view={<Home/>} /> : <Login/>}/>
        <Route  path='/login' element={loginState  ? <Main view={<Home/>} /> : <Login/>}/>
        <Route  path='/main' element={loginState  ? <Main view={<Home/>}/> : <Login/>} />
        <Route path='/home' element={loginState  ? <Main view={<Home/>}/> : <Login/>}/>
        <Route path='/categories' element={loginState  ? <Main view={<Categories/>}/> : <Login/>}/>
        <Route path='/addblog' element={loginState  ? <Main view={<AddBlog/>}/> : <Login/>}/>
        <Route path='/signUp' element={loginState  ? <Main view={<AddBlog/>}/> : <SignUp/> } />
        <Route path='/forget_password' element={<ForgetPassword/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
