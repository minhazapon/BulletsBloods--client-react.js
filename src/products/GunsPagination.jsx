


const GunsPagination = ({ totalPost, postPerPage, setCurrentPage}) => {

    let gunZ = [] 


    for( let i = 1; i < Math.ceil(totalPost/postPerPage); i++ ){

        gunZ.push(i);

    }
 


    return (
        <div>

            {

               gunZ.map( ( gunZ, index ) => {

                  return <div className="join">
                  <button onClick={() => setCurrentPage(gunZ) } className="join-item btn hover:bg-yellow-400 bg-black text-blue-500  " key={index}> {gunZ} </button>
                  </div>


               })}
            
        </div>
    );
};

export default GunsPagination;