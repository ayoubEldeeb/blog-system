import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {

  const [userName , setUserName] = React.useState('')
  const [email , setEmail] = React.useState('')
  const [password , setPassword] = React.useState('')
  const [phone , setPhone] = React.useState('')
  const [msg , setMsg] = React.useState('')
  const notify = () => toast();
  const navigate = useNavigate()

  const signUp = async () => {
    if (email.includes('@')) {
      await axios.post('http://localhost:3000/signup',{
      userName : userName,
      email : email,
      password : password,
      phone :phone
    }).then((res) => {
      if (res.data.msg === 'your data has entered') {
        navigate('/login')
        return
      }
      if (res.data.msg === 'enter your data..') {
        toast('enter your data..')
        return
      }
      if (res.data.msg === 'sorry this userName or email already taken') {
        toast('sorry this userName or email already taken')
        return
      }
      
    }).catch((err) => {
      console.log(err)
    })
    return
    }
    toast('enter your email correctly')
    
  }




  return (
    <>
    <ToastContainer />
    <div>
        <section className="flex flex-col items-center pt-6">
  <div
    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl ">Create an
        account
      </h1>
      <div className="space-y-4 md:space-y-6" method="POST">
        <div>
          <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your full name</label>
          <input onChange={e => {setUserName(e.target.value)}} type="text" name="name" id="name" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md " placeholder="User Name" required=""/>
        </div>
        <div>
          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
          <input onChange={e => {setEmail(e.target.value)}} type="email"  className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" placeholder="Email" required=""/>
        </div>
        <div>
          <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input onChange={e => {setPassword(e.target.value)}} type="password" name="password" id="password" placeholder="Password" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" required=""/>
        </div>
        <div>
          <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your full name</label>
          <input onChange={e => {setPhone(e.target.value)}} type="phone" name="phone" id="phone" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md " placeholder="phone" required=""/>
        </div>
        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {signUp() ;notify()} }>Create an account</button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account?  
        <Link className='font-medium text-blue-600 hover:underline dark:text-blue-500' to={'/login'}> Sign in</Link>
        </p>
       
      </div>
    </div>
  </div>
</section>
    </div>
    </>
  )
}

export default SignUp