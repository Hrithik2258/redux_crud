import React ,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../redux/actions';

const AddUser = () => {
    const [state, setState] = useState({
        name:"",
        email:"",
        age:"",
        address:""
    });

    const [error,setError] = useState('')

    const { name,email,age,address} = state;

    const navigate = useNavigate();


    const dispatch = useDispatch();

    const handleInput = (e)=> {
        let {name,value} = e.target;
            setState({...state,[name]:value})
    }


    const handleSubmit = (e)=> {

        // alert("Clicked")
        e.preventDefault();
        if (!name || !address || !email || !age ){
            setError("Please Enter The Data You Can Not Send Empty Data ")
        }
        else {
            console.log(state)
        //    const a = {name:name,address:address,age:age}; 
            dispatch(addUser(state));
           
            navigate('/')
            setError("");
        }

    };


  return (
    <div>
 <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add A USer</h1>
      { error && <h3 style={{color:"red"}}>{error }</h3>}
      
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={name} onChange={handleInput}/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email} onChange={handleInput}/>
          </div>
        </div>

        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="age" className="leading-7 text-sm text-gray-600">Age</label>
            <input type="number" id="age" name="age" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={age} onChange={handleInput}/>
          </div>
        </div>

        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
            <textarea id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={address} onChange={handleInput}></textarea>
          </div>
        </div>




        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>Submit</button>
        </div>
   
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default AddUser
