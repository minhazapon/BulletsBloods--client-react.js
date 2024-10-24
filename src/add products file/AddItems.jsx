import { useEffect, useState } from "react";
import AddDataDetails from "./AddDataDetails";



const AddItems = () => {
    
    const [ items, setItems ] = useState([])

    useEffect( () =>{

      fetch('https://bulletsbloods-server-node-js.onrender.com/addData')
      .then( res => res.json())
      .then(data => setItems(data))

    } , [])

    return (
        <div className=" mt-10 mb-10 ml-5 mr-5 flex justify-center ">


            <div className=" grid  md:grid-cols-2 gap-10 ">


              {

                   items.map( items => <AddDataDetails key={items._id} items={items} ></AddDataDetails> )

              }









            </div>
            
        </div>
    );
};

export default AddItems;