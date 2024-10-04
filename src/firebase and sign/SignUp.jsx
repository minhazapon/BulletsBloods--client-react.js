import { useContext } from "react";
import { fireContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const SignUp = () => {
    

    const {createUser} = useContext(fireContext)

    const navigate = useNavigate()
    
    const handleUp = e =>{

        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)


        createUser(email, password)
        .then(result => {
		console.log(result.user)
         
        if(result){
			Swal.fire({
                title: ' SignUp Successfully!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
  
		}

        e.target.reset();
        navigate('/')
		})
		.catch(error => {
			console.error(error)
		})
      }


    return (
        <div>

        <div className=" flex justify-center mt-10 mb-10 ml-5 mr-5">


        <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center bg-black border-[1px]  border-[#00CCDD] text-gray-100">
            <h1 className="text-3xl font-semibold">Sign Up to your account</h1>
            {/* <a className="text-sm text-gray-400" href="/">Or start your free trial</a> */}
            <form onSubmit={handleUp} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input id="email" type="email" name="email" placeholder="Email address" className="rounded-t-md border-gray-600 bg-black text-gray-100 focus:ring-violet-400 focus:border-violet-400 focus:ring-2" />
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input id="password" type="text" name="password" placeholder="Password" className="-mt-1 rounded-b-md border-gray-600 bg-black text-gray-100 focus:ring-violet-400 focus:border-violet-400 focus:ring-2" />
                </div>
                <div className="flex justify-between">
                    {/* <div className="flex items-center">
                        <input type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:ring-violet-400 focus:border-violet-400 focus:ring-2 accent-violet-400" />
                        <label htmlFor="remember" className="text-sm text-gray-400">Remember me</label>
                    </div> */}
                    {/* <a className="text-sm text-gray-400" href="/">Forgot your password?</a> */}
                </div>
                <input  className="px-8 py-3 space-x-2 font-semibold rounded bg-black border-[1px]  border-[#00CCDD] btn text-white" type="submit" value="Sign Up" />
                {/* <button type="button" className="px-8 py-3 space-x-2 font-semibold rounded bg-black border-[1px]  border-[#00CCDD] btn text-white">Sign Up</button> */}
            </form>
           </div>

         </div>
            
        </div>
    );
};

export default SignUp;