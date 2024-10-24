import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Update = () => {
      

    const update = useLoaderData();


    const { _id, name, brand, price, category, photourl, description } = update

    const handleUp = e =>{


    e.preventDefault();

    const form = e.target 
    const name = form.name.value 
    const brand = form.brand.value 
    const price = form.price.value 
    const category = form.category.value 
    const photourl = form.photourl.value 
    const description = form.description.value 
    const UpdateUser = {  name, brand, price, category, photourl, description }
    console.log(UpdateUser)


    fetch(`https://bulletsbloods-server-node-js.onrender.com/addData/${_id}`, {

      method: 'PUT',
      headers:{
          'content-type': 'application/json'
      },
      body: JSON.stringify(UpdateUser)

    })
    .then(res => res.json())
    .then( data => {
     
        console.log(data)
        if(data.modifiedCount > 0){
            Swal.fire({
                title: 'Update!',
                text: 'Update Send SuccessFully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
         
            form.reset();   
        }
 

    } )



    }


    return (
        <div className=" mb-10 ml-5 mr-5">
            
            <section class="bg-black dark:bg-gray-900 mt-10 border-[1px] border-[#00CCDD] rounded-xl ">
  <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-[#00CCDD] dark:text-white  ">Update product</h2>
      <form  onSubmit={handleUp}  >
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">Product Name</label>
                  <input className=" bg-gray-50 border border-gray-300 text-[#00CCDD] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "  placeholder="Type product name" required type="text" name="name" defaultValue={name} />
              </div>
              <div class="w-full">
                  <label for="brand" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">Brand</label>
                  <input  name="brand" defaultValue={brand} id="brand" class="bg-gray-50 border border-gray-300 text-[#00CCDD] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required="" type="text" />
              </div>
              <div class="w-full">
                  <label for="price" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">Price</label>
                  <input type="number" name="price" defaultValue={price} id="price" class="bg-gray-50 border border-gray-300 text-[#00CCDD] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""  />
              </div>
              <div>
                  <label for="category" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">Category</label>
                  <select id="category" name="category" defaultValue={category} class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select category</option>
                      <option value="Premium">Premium</option>
                      <option value="General">General</option>
                    
                  </select>
              </div>
              <div>
                  <label for="item-weight" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">PhotoUrl</label>
                  <input  placeholder="PhotoUrl" class="bg-gray-50 border border-gray-300 text-[#00CCDD] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" type="url" name="photourl" defaultValue={photourl} id="" />
              </div> 
              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-[#00CCDD] dark:text-white">Description</label>
                  <textarea id="description" rows="8" name="description" defaultValue={description} class="block p-2.5 w-full text-sm text-[#00CCDD] bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
              </div>
          </div>
          <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-black btn rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 border-[1px] border-[#00CCDD] ">
              Update product
          </button>
      </form>
  </div>
</section>
            
        </div>
    );
};

export default Update;