import { useQuery } from "@tanstack/react-query";
import AddDetails from "./AddDetails";




const AddData = () => {

    const { data : query } = useQuery({
          
        queryKey: ['query'],
        queryFn: async () => {

           const res = await fetch('https://bulletsbloods-server-node-js.onrender.com/gunsData')
           return res.json()
        }

    })

    return (
        <div className=" flex justify-center">

            <div className=" grid  md:grid-cols-3 gap-5">

                   {
                  
                       query?.map( query =>  <AddDetails  query={query} ></AddDetails> )


                   }



            </div>
            
        </div>
    );
};

export default AddData;