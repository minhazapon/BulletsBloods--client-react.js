import { useLoaderData } from "react-router-dom";
import ExDeatils from "./ExDeatils";



const Experience = () => {

    const ex = useLoaderData() 


    return (
        <div className=" mt-10 mb-10 ml-5 mr-5 flex justify-center ">

            <div  className=" grid  md:grid-cols-3 gap-10 ">

                {

                   ex.map( ex =>  <ExDeatils key={ex._id} ex={ex} ></ExDeatils> )


                }

            </div>
            
        </div>
    );
}; 

export default Experience;