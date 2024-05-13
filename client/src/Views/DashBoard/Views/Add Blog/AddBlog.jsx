import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddBlog() {
  const [categories , setCategories] = React.useState([])
  const [title , setTitle] = React.useState('')
  const [description , setDescription] = React.useState('')
  const [category , setCategory] = React.useState('')
  const [createdBy , setCreatedBy] = React.useState('')
  const titInput = document.getElementById('titInput')
  const desInput = document.getElementById('desInput')
  const notify = () => toast();
   
  const user = JSON.parse(window.localStorage.getItem('User'))
  const userId = user.data._id


  

  const addCategory = async () => {
    
    setTitle('')
    setDescription('')
    titInput.value = ''
    desInput.value = ''
    document.getElementById('selectCat').getElementsByTagName('option')[0].selected = 'selected'
    
    await axios.post('http://localhost:3000/addBlog' , {
      title : title,
      description : description,
      category : category,
      createdBy : createdBy
      
    }).then((res) => {
      toast(res.data.msg)
    }).catch((err) => {
      console.log(err)
    })
  }

  React.useEffect(() => {
    
    setCreatedBy(user.data._id)
    getAllData()
    
  },[categories])

  
  const getAllData = async () => {
    await axios.post('http://localhost:3000/getAll',{userId : userId}).then((res) => {
        setCategories([res.data.data])
        
        
    }).catch((err) => {
        console.log(err)
    })
    
    
    
    
}

  

  return (
    <>
    <ToastContainer />
    <div className=' w-[80vw] mr-auto text-center flex flex-col items-center justify-center h-screen' >
        
        <div className="heading text-center   font-bold text-2xl m-5 text-gray-800">New Blog</div>

  <div className="editor w-10/12 mx-auto flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
    <input id='titInput' maxlength="50" onChange={e => {setTitle(e.target.value)}} className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text"/>
    <textarea id='desInput' maxlength="300" onChange={e => {setDescription(e.target.value)}} className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here"></textarea>
    <select onChange={e => {setCategory(e.target.value)}} id='selectCat' className=" mt-2 block w-sm text-sm font-medium transition duration-75 border border-e-blue-400 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none" >
    <option value="" selected disabled hidden>Choose the category</option>
    {
                categories.length > 0 &&
                Object.values(categories[0]).map((index , key) => (
                  <>
                  <option value={index.categoryName}>{index.categoryName}</option>
                  </>
                ))
            }
    </select> 
  
  
    
    <div className="icons flex text-gray-500 m-2">
      
      <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
      <div className="count ml-auto text-gray-400 text-xs font-semibold">{description.length}/300</div>
    </div>
    
    <div className="buttons flex">
      <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div>
      <button onClick={addCategory} className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">post</button>
    </div>
  </div>
    </div>
    </>
  )
}

export default AddBlog