import { useEffect, useState } from "react";
import GunsList from "./GunsList";



const GunProducts = () => {
    
    const [guns, setGuns] = useState([]) 


    useEffect( () =>{

      fetch('http://localhost:5000/gunsData')
      .then( res => res.json())
      .then( data => setGuns(data) )

    } , [ ])


    return (
        <div className=" mt-10 mb-10 ml-5 mr-5">


            <GunsList guns={guns} ></GunsList>
            
        </div>
    );
};

export default GunProducts; 