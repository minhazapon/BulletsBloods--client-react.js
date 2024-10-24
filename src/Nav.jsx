

import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { fireContext } from './firebase and sign/AuthContext';


const Nav = () => {

    const {user, logOut} = useContext(fireContext)

    const handleOut = () => {
      logOut()
      .then(() => console.log('logOut successfully'))
      .catch( error => 
        console.error(error)
      )
     }

    const navz = <>
    
       <li className=' text-white font-mono' ><NavLink to='/' >Home</NavLink></li>
       <li className=' text-white font-mono' ><NavLink to='/gunsProducts' >Products</NavLink></li>
      { user && <>
        <li className=' text-white font-mono' ><NavLink to='/EX' >Experience</NavLink></li>
        <li className=' text-white font-mono' ><NavLink to='/ap' >AddProducts</NavLink></li>
        <li className=' text-white font-mono' ><NavLink to='/additems' >AddItems</NavLink></li>
      </> }
    
    
    
    </>



    return (
        <div>

<div className="navbar bg-black p-5 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5  "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className=" bg-black menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navz}
      </ul>
    </div>
    <div className=' flex items-center gap-2'>

    <img className=' h-[100px] w-[100px] rounded-full ' src='https://img.freepik.com/free-vector/skull-wearing-army-helmet-vector_43623-1017.jpg?t=st=1727925014~exp=1727928614~hmac=43ec101d894e761bec36b7eef277880990f1fe08d0946ba1765878764f57778d&w=740' alt="" />
    <a className=" text-2xl  text-red-600  flex-col md:flex-row lg:flex-row"><span className=' text-yellow-300'>Bullets</span><span>Bloods</span></a>


    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navz}
    </ul>
  </div>
  <div className="navbar-end ">

  <div className=" flex justify-center ">

  { user ? <>
    
    <a href="#_" onClick={handleOut} class="relative inline-block text-lg group">
    <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease">SignOut</span>
    <span class="relative">SignOut</span>
    </span>
    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
    </a>
    
  </>:

    <Link to='/login' >    
    <a href="#_" class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-black border-[1px] border-yellow-300 text-black inline-block">
    <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow-300 group-hover:h-full opacity-90"></span>
    <span class="relative text-white">SignIn</span>
    </a>
    </Link>

  }
    
    
   

  </div>

  </div>
  
</div>
            
        </div>
    );
};

export default Nav;