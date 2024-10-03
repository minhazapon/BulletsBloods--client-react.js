import GunPDetails from "./GunPDetails";



const GunsList = ({guns}) => {
    return (
        <div className=" flex justify-center">

            <div className=" grid  md:grid-cols-2 gap-10 ">



             { guns.map ( (guns, index) =>{

                   
                 return (

                      <GunPDetails key={index} image={guns.image} title={guns.title} price={guns.price} details={guns.details} ></GunPDetails>

                 )





             })}









            </div>
            
        </div>
    );
};

export default GunsList;