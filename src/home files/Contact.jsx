

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import Swal from "sweetalert2";


const Contact = () => {

  

	const onSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e87151e8-7baa-471d-b58a-0bd71fe1cd67");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            Swal.fire({
                title: 'Success!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
          event.target.reset();
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
          setResult(data.message);
        }
      };


    return (
        <div className=" mt-10 p-20 "
        
        style={{
            backgroundImage: "url(   https://img.freepik.com/free-photo/3d-view-powerful-weapon_23-2150888917.jpg?t=st=1727932058~exp=1727935658~hmac=26606d3c23c09b57770c610516cc547481c65adfe1832c7064dfecad8e35cec8&w=740  )",
          }}
        
        
        >


            <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-20 bg-gradient-to-r from-black p-5 rounded-xl  ">



                <div>
                
                <div  className=" flex items-center gap-2">
                <a className=" text-2xl  text-red-600  flex-col md:flex-row lg:flex-row"><span className=' text-yellow-300'>Bullets</span><span>Bloods</span></a>
                <img className=' h-[50px]' src="https://cdn-icons-png.flaticon.com/128/967/967119.png" alt="" />
                </div>
                <p className=" mt-6 font-thin text-white">A machine gun is a fully automatic and rifled<br></br> firearm designed for sustained direct fire<br></br> with rifle cartridges. The modern machine<br></br> gun was first invented in 1884 by Hiram Maxim</p>
                 <p className=" mt-5 text-xl font-thin text-white">
                  <span className=" text-4xl  text-white font-thin">Contact Us</span>
                  <br></br>
                  <p className=" mt-3">Email:Bullets@gmail.com</p>
                
                  <p className="">Numbers: +8801950374409</p>
                 </p>


                </div>

      
                <div>
                                
                
                <form  onSubmit={onSubmit} className="container flex flex-col mx-auto space-y-12">
		        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			     <div className="space-y-2 col-span-full lg:col-span-1">
				<p className=" text-white font-medium">Personal Inormation</p>
				<p className=" text-white text-xs">Give Your Information<br></br> For Join With Us</p>
			    </div>
			    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-white ">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-sm">First name</label>
					<input required name='firstname' id="firstname" type="text" placeholder="First name" className=" p-3 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Last name</label>
					<input required name='lastname' id="lastname" type="text" placeholder="Last name" className=" p-3  w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input required name='email' id="email" type="email" placeholder="Email" className=" p-3 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full">
					<label htmlFor="address" className="text-sm">Address</label>
					<input required name='address' id="address" type="text" placeholder="Address" className=" p-3 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="city" className="text-sm">City</label>
					<input required name='city' id="city" type="text" placeholder="City" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-sm">State / Province</label>
					<input required name='state' id="state" type="text" placeholder=" State / Province" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">ZIP / Postal</label>
					<input required name='zip' id="zip" type="text" placeholder="ZIP / Postal" className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					 {/* <input  type="submit" value="Submit" /> */}
                     <button className=' bg-black text-white btn' >Submit</button>
                    
				</div>
			</div>
		</fieldset>
		
	</form>
                
               </div>








            </div>
            
        </div>
    ); 
};

export default Contact;