import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../redux/actions';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  let dispatch = useDispatch();

  const { users } = useSelector(state => state.data);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadUsers());
  }, [])


  const handleDelete = (id) => {
    console.log(id)
    // This Means We are Getting the ID , So we have To figure Out why the Delete Function is Not Working
    if (window.confirm("Are you sure you want to delete the User ? ")) {
      dispatch(deleteUser(id))
    }
  }


  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Name</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">email</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">age</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">address</th>

                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">action</th>

                </tr>
              </thead>
              <tbody>

                {users && users.map((user) => (


                  <tr key={user.id}>
                    <td className="px-4 py-3">{user.name}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">{user.age}</td>
                    <td className="px-4 py-3 text-lg text-gray-900">{user.address}
                    </td>
                    <td>



                   

                      <button type="button" className="text-white bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-yellow-300 dark:hover:bg-yellow-300 dark:focus:ring-yellow-500" onClick={() => navigate(`/edituser/${user.id}`)}>
                       Edit user
                        
                      </button>


                      <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-4" onClick={() => handleDelete(user.id)}>
                        Delete
                      </button>




                    </td>



                  </tr>
                ))}


              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">

            <Link to='/adduser'>   <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" >Add New</button></Link>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  )
}

export default Home
