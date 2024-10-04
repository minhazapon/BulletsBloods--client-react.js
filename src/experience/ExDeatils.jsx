import { Link } from "react-router-dom";


const ExDeatils = ({ex}) => {
    

    const { _id, image, title, price, details } = ex

    return (
        <div>

            <div className="card bg-base-100 image-full h-[300px] w-[400px] shadow-xl">
              <figure>
                <img className=" h-[300px] w-[400px]"
                  src={image}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> {title} </h2>
                <div className="card-actions justify-end">
                  <Link to={`/EX/${_id}`} >
                  <button className="btn  bg-black text-white font-serif "> Click For Details </button>
                  </Link>  
                
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default ExDeatils;