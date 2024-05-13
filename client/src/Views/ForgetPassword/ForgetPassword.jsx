import React from 'react'
import { Link } from 'react-router-dom'

function ForgetPassword() {
  return (
    <div>
        <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
    <div className="mt-7 bg-white  rounded-xl shadow-lg  border-2 border-indigo-300">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold  text-black">Forgot password?</h1>
          <p className="mt-2 text-sm  text-black">
            Remember your password?
            <Link className='font-medium text-blue-600 hover:underline dark:text-blue-500' to={'/login'}> login here</Link>
          </p>
        </div>

        <div className="mt-5">
          <form>
            <div className="grid gap-y-4">
              <div>
                <label for="email" className="block text-sm font-bold ml-1 mb-2 text-black">Email address</label>
                <div className="relative">
                  <input type="email" id="email" name="email" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" required aria-describedby="email-error"/>
                </div>
                <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
              </div>
              <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset password</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    
  </main>
    </div>
  )
}

export default ForgetPassword