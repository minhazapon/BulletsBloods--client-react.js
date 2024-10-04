

import { NavLink } from 'react-router-dom';


const Nav = () => {

    const navz = <>
    
       <li className=' text-white font-mono' ><NavLink to='/' >Home</NavLink></li>
       <li className=' text-white font-mono' ><NavLink to='/gunsProducts' >Products</NavLink></li>
       <li className=' text-white font-mono' ><NavLink to='/EX' >Experience</NavLink></li>
       <li className=' text-white font-mono' ><NavLink to='/ap' >AddProducts</NavLink></li>
       <li className=' text-white font-mono' ><NavLink to='/additems' >AddItems</NavLink></li>
    
    
    
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

    <img className=' h-[150px] w-[150px] rounded-full ' src='https://img.freepik.com/free-vector/skull-wearing-army-helmet-vector_43623-1017.jpg?t=st=1727925014~exp=1727928614~hmac=43ec101d894e761bec36b7eef277880990f1fe08d0946ba1765878764f57778d&w=740' alt="" />
    <a className=" text-2xl  text-red-600  flex-col md:flex-row lg:flex-row"><span className=' text-yellow-300'>Bullets</span><span>Bloods</span></a>
    <img className=' h-[50px]' src="https://cdn-icons-png.flaticon.com/128/967/967119.png" alt="" />

    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navz}
    </ul>
  </div>
  <div className="navbar-end ">

  <div className=" flex justify-center mt-5">

    <a href="#_" class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-black border-[1px] border-yellow-300 text-black inline-block">
    <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow-300 group-hover:h-full opacity-90"></span>
    <span class="relative text-white">SignIn</span>
    </a>
    </div>

  </div>
  
</div>
            
        </div>
    );
};

export default Nav;