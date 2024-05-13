import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Categories() {
    const inputV = document.getElementById('inputValue')
    const [category , setCategory] = React.useState('')
    const [categories , setCategories] = React.useState([])
    const user = JSON.parse(localStorage.getItem('User'))
    const userId = user.data._id
    
    React.useEffect(() => {
        getAllData()
        
        window.localStorage.setItem('catsCount',Object(categories[0]).length)
        
      
        
        
        
    },[categories])
    const refreshPage = () => {
        window.location.reload(false)
        
    }
    const getAllData = async () => {
        await axios.post('http://localhost:3000/getAll',{userId : userId}).then((res) => {
            setCategories([res.data.data])
          
           
        }).catch((err) => {
            console.log(err)
        })
        
        
    }

    const notify = () => toast();

    const addCategory = async () => {
        if (!category) {
            toast('enter category name')
            getAllData()
            return
        }
        
        const categoryName = category.toLowerCase()
        setCategory('')
        inputV.value = ''
        
        await axios.post('http://localhost:3000/addCategory' , {
            categoryName : categoryName,
            userId : userId
        }).then((res) => {
            toast(res.data.msg)
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
        getAllData()
        
        
        
    } 
    const deleteCat = async (id) => {
        
        await axios.delete(`http://localhost:3000/deleteCat?id=${id}`).then((res) => {
            toast(res.data.msg)
        })
        
        getAllData()
        
    }
    
  return (
    <>
    <ToastContainer />
    <div className=' flex flex-col items-center w-[80vw]'>
        <div>
        
        <div className="m-4 flex">
    	<input id='inputValue' onChange={e => {setCategory(e.target.value)}} className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="caregory"/>
		<button className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r" onClick={() => {addCategory() ; notify()}}>Add category    </button>
        </div>
        </div>
<div className="flex flex-col p-4 w-[50%]">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center border-spacing-1  border-separate ">
          <thead className="border-b">
            <tr className='border-none'>
              <th scope="col" className="text-lg border-none  text-gray-900 px-6 py-4 font-bold bg-slate-200 rounded-lg">
                Category
              </th>
              <th scope="col" className="text-lg border-none text-gray-900 px-6 py-4 font-bold bg-slate-200 rounded-lg">
              Category Id
              </th>
              <th scope="col" className="text-lg  text-gray-900 px-6 py-4 font-bold bg-slate-200 rounded-lg">
                Blog count
              </th>
            </tr>
          </thead>
          <tbody className=''>
            {
                categories.length > 0 &&
                Object.values(categories[0]).map((index , key) => (
                    <tr className='border-none' >
                        <td className=' border-none text-lg p-2  bg-slate-200 rounded-lg '>{index.categoryName}</td>
                        <td className=' border-none text-lg p-2  bg-slate-200 rounded-lg'>{index._id}</td>
                        <td className=' border-none text-lg p-2  bg-slate-200 rounded-lg'>1</td>
                        <button className=' p-2 border-none text-lg  bg-red-500 rounded-lg ' onClick={e => {deleteCat(index._id)}}>Delete</button>
                    </tr>
                ))
            }
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </div>
    
    </>
    
  )
}

export default Categories;

