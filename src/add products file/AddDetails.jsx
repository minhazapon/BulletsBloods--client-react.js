import { Link } from "react-router-dom";


const AddDetails = ({query}) => {
    
    const { _id, image, title, price, details } = query

    return (
        <div>

        <div className="card bg-base-100  h-[700px] w-[400px] shadow-xl">
          <figure>
            <img className=" h-[400px] w-[400px]"
              src={image}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> {title} </h2>
            <p> {price} </p>
            <p> {details} </p>
            <div className="card-actions justify-end">
                <Link to='/addForm' >
                <button className="btn  bg-black text-white  ">Add Items</button>
                </Link>
            </div>
          </div>
        </div>
                    
        </div>
    );
};

export default AddDetails;