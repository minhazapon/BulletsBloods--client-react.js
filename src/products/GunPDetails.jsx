import { Link } from "react-router-dom";




const GunPDetails = ({ _id, image, price, title, details }) => {



    return (
        <div>

        <div className="max-w-xs p-6 rounded-md shadow-md bg-black border-[1px] border-yellow-400 text-gray-50">
        	<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
        	<div className="mt-6 mb-2">
        	
        		<h2 className="text-xl font-semibold font-serif tracking-wide">{title} </h2>
        	</div>
        	{/* <p className="text-gray-100 font-serif  "> {details} </p> */}
            <div className=" flex justify-center items-center gap-5">
              
            <div>
              <Link to='/buy'>
              
              <a href="#_" class=" mt-5 px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-black border-[1px] border-yellow-300 text-black inline-block">
              <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow-300 group-hover:h-full opacity-90"></span>
              <span class="relative text-white">Buy</span>
              </a>
              
              </Link>  
            
            </div>
            </div>
            
        </div>
            
        </div>
    );
};
 
export default GunPDetails;