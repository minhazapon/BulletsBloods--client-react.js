import { useEffect, useState } from "react";
import GunsList from "./GunsList";
import GunsPagination from "./GunsPagination";
import GunsIdData from "./GunsIdData";



const GunProducts = () => {
    
    const [guns, setGuns] = useState([]) 

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPerPage] = useState(2)


    useEffect( () =>{

      fetch('https://bulletsbloods-server-node-js.onrender.com/gunsData')
      .then( res => res.json())
      .then( data => setGuns(data) )

    } , [ ])


    const lastIndexPage = currentPage * postPerPage 
    const fastIndexPage = lastIndexPage - postPerPage 
    const currentPostPagez = guns.slice( fastIndexPage, lastIndexPage )


    return (
        <div className=" mt-10 mb-10 ml-5 mr-5">


            <GunsList guns={currentPostPagez} ></GunsList>

            <div className=" flex justify-center mt-10">
              
              <GunsPagination totalPost={guns.length} setCurrentPage={setCurrentPage} postPerPage={postPerPage}  ></GunsPagination>

            </div>
            
             {/* <GunsIdData guns={guns} ></GunsIdData> */}

        </div>
    );
};

export default GunProducts; 