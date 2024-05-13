import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Login() {
    const [email , setEmail] = React.useState("")
    const [password , setPassword] = React.useState("")
    const [msg , setMsg] = React.useState('')
    const navigate = useNavigate()
    const signUp = () => {
        navigate('/SignUp')
    }
    const refreshPage = () => {
        window.location.reload(false)
    }
    const loginUser = async () => {    
               
       if (!password || !email) {
        setMsg('enter your email and password')
        return
       }
       await axios.post('http://localhost:3000/login' , {
        email : email,
        password : password
       }).then((res) => {
        if (res.data.msg === 'hello') {
            window.localStorage.setItem('loginState' , true)
            navigate('/main')
            window.localStorage.setItem('User',JSON.stringify(res.data) )
            refreshPage()
            return
        }
        if (res.data.msg === 'user not found' || res.data.msg === 'password is incorrect') {
            setMsg('your email or password in incorrect')
            
            return
        }
        
        
       
       }).catch((err) => {
        console.log(err)
       })
       
        

            
        

         
    }

  return (



    <>


<div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <div className="relative py-3 sm:w-96 mx-auto text-center">
    <span className="text-2xl font-light ">Login to your account</span>
    <div className="mt-4 bg-white shadow-md rounded-lg text-left">
      <div className="h-2 bg-blue-400 rounded-t-md"></div>
      <div className="px-8 py-6 ">
        <label className="block font-semibold">Email </label>
        <input onChange={e => {setEmail(e.target.value)}} type="text" placeholder="Email" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/>
        <label className="block mt-3 font-semibold">Password </label>
        <input onChange={e => {setPassword(e.target.value)}} type="password" placeholder="Password" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/>
          <p className=' ml-2 mt-1 text-red-500'>{msg}</p>
          <div className="flex justify-between items-baseline">
            <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 " onClick={() => {loginUser();}} >Login</button>
            <Link className='font-medium text-blue-600 hover:underline dark:text-blue-500' to={'/forget_password'}>forget password</Link>
          </div>
          <div className=' mt-2'><a className=' hover:underline ml-2 text-lg  hover:text-blue-600' onClick={signUp} href="">sign up</a></div>
          
      </div>
      
  </div>
</div>
</div>




    {/* <div className=' bg-slate-300 w-full h-screen flex flex-col justify-center items-center'>
    <div
    className=" relative  mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
    <div className="w-full">
        <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p className="mt-2 text-gray-500">Sign in below to access your account</p>
        </div>
        <div className="mt-5">
            <form action="">
                <div className="relative mt-6">
                    <input onChange={e => {setEmail(e.target.value)}} type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                    <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                </div>
                <div className="relative mt-6">
                    <input onChange={e => {setPassword==(e.target.value)}} type="password" name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label for="password" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                </div>
                <p className=' p-2 text-red-500'>{msg}</p>
                <div className="my-6">
                    <button onClick={loginUser} type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                </div>
                <p className="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                    <a onClick={signUp}
                        className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign
                        up
                    </a>.
                </p>
            </form>
            
        </div>
    </div>
</div>  
    </div>
     */}
    </>
  )
}

export default Login