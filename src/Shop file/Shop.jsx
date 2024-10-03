import Swal from "sweetalert2";



const Shop = () => {

   
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
                title: 'Order Successfully Done!',
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


        <div className=" mt-10 mb-10 ml-10 mr-10">


            <form onSubmit={onSubmit } >
                  
             <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-10 bg-white p-40 rounded-xl border-[1px] border-[#2ce6ff] ">              
            <div>
               <img className=" h-[300px] rounded-xl" src="https://cdn-icons-gif.flaticon.com/15576/15576198.gif" alt="" />
            </div>
            
             <div className=" flex justify-center">
            
              
             <div className=" grid  md:grid-cols-2 gap-5 ">
              
              <label className="input input-bordered flex items-center gap-2 font-serif ">
                Name:
              <input type="text" className="grow" name="name" placeholder="Name" required />
              </label>
              <label className="input input-bordered flex items-center gap-2  font-serif ">
                Email:
                <input type="email" className="grow" placeholder="Email" name="email" id="" required />
             
              </label>
              <label className="input input-bordered flex items-center gap-2  font-serif ">
                GName:
                <input type="text" className="grow" placeholder="GunZName" name="gunname" required />
             
              </label>
              <label className="input input-bordered flex items-center gap-2  font-serif ">
                Price:
                <input type="text" className="grow" placeholder="Name" name="price" required />
             
              </label>
              <label className="input input-bordered flex items-center gap-2  font-serif ">
                Date:
                <input type="date" className="grow" placeholder="Date" name="date" id="" required />
            
             
              </label>
              <label className="input input-bordered flex items-center gap-2  font-serif ">
                Quantity:
                <input type="text"  placeholder="Name" name="quantity" required />
             
              </label>
              <label className="input input-bordered flex items-center gap-2  font-serif ">
                Number:
                <input type="number" name="number" placeholder="Number" id="" required />
            
             
              </label>
            
              <div>
                <input className=" btn bg-black border-[1px] border-[#2ce6ff] font-serif text-white w-full " type="submit" value="Buy Guns" />
              </div>
            
              </div>
            
             </div>
            
            </div>


            </form>

            
            
        </div>
    );
};

export default Shop;