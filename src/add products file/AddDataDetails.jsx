import { data } from "autoprefixer";
import { json, Link } from "react-router-dom";
import Swal from "sweetalert2";




const AddDataDetails = ({items}) => {
     
    const { _id, name, brand, price, category, photourl, description } = items



     const handleDelete = delete_id =>{
         
        console.log(_id)
         
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
         
              
               fetch(`https://bulletsbloods-server-node-js.onrender.com/addData/${_id}`, {

                 method: 'DELETE',
              
               })
               .then( res => res.json())
               .then( data => {

                 console.log(data)
                 if(data.deletedCount > 0){

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });

                 }


               } )



            }
          });




     }

    
    return (
        <div>

        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img className=" h-[200px] w-[300px]"
              src={photourl}
              alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> {brand} </h2>
            <p> {category} </p>
            <div className="card-actions flex justify-center items-center gap-3  ">
              <Link to='/buy' >
              <button className="btn bg-black border-[1px] border-yellow-400 font-serif text-white  ">Shop</button>
              </Link>  
              <button onClick={() => handleDelete(items._id)  } className="" ><img className=" h-[30px] " src="https://cdn-icons-png.flaticon.com/128/6096/6096937.png" alt="" /></button>
              <Link to={`/update/${_id}`} >
              <button ><img className=" h-[30px] " src="https://cdn-icons-png.flaticon.com/128/5334/5334827.png" alt="" /></button>
              </Link>
           
            </div>
          </div>
        </div>
            
        </div>
    );
};

export default AddDataDetails;