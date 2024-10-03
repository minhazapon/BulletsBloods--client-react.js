import { useQuery } from "@tanstack/react-query";
import ProductsDetails from "./ProductsDetails";



const Products = () => {

     const { data: query } = useQuery({

         queryKey: ['query'],
         queryFn: async () =>{

           const res = await fetch('http://localhost:5000/bulletData')
           return res.json()

         }



     })



    return (
        <div className=" mt-10  mb-10 mr-5 ml-5">


            <div>

             

                <div className=" flex justify-center flex-col md:flex-row">
                <div className="  bg-gradient-to-r from-black p-5   flex items-center gap-5">
                   <img className=" h-[80px]" src="https://cdn-icons-png.flaticon.com/128/5322/5322239.png" alt="" />
                   <p className=" text-5xl font-serif  text-yellow-300  ">Products Line</p>
                   <img className=" h-[80px]" src="https://cdn-icons-png.flaticon.com/128/5322/5322239.png" alt="" />
                </div>
                </div>
                <p className=" text-center font-serif text-white">"To be prepared for war is one of the most effective means of preserving peace."</p>

            {/* --------------------------------------------------------- */}



            <div className=" flex justify-center mt-10 ">


              <div className=" grid  md:grid-cols-3 gap-5 ">
                 
                 {

                  query?.map( query => <ProductsDetails query={query} ></ProductsDetails> )

                 }



              </div>


            </div>









            </div>
            
        </div>
    );
};

export default Products;