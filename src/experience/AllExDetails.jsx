import { useLoaderData } from "react-router-dom";



const AllExDetails = () => {
     

     const AllDataZ = useLoaderData();


     const { _id, image, title, price, details } = AllDataZ




    return (
        <div className=" flex justify-center mt-10 mb-10 ml-4 mr-5">

        <div className="max-w-lg p-4 shadow-md bg-black border-[1px] border-yellow-400 text-gray-100">
        	<div className="flex justify-between pb-4 border-bottom">
        		
        	</div>
        	<div className="space-y-4">
        		<div className="space-y-2">
        			<img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
        			<div className="flex items-center text-xs">
        				<span className=" font-serif "> {title} </span>
        			</div>
        		</div>
        		<div className="space-y-2">
        			<a rel="noopener noreferrer" href="#" className="block">
        				<h3 className="text-xl  font-semibold text-white font-serif"> {price} </h3>
        			</a>
        			<p className="leading-snug text-white font-serif  mb-10 "> {details} </p>
                    <span className="  mb-2 font-serif text-2xl">Experience:</span>
                    <p className=" mt-5 font-serif ">The sound of gunfire echoes through the air as I squeeze the trigger, feeling a rush of adrenaline coursing through my veins. The recoil of the gun kicks back against my hand, a familiar sensation that I've grown accustomed to over time. As I look down the barrel, I see the target in my sights, and with a steady hand, I take aim. The moment the bullet leaves the gun, I feel a sense of satisfaction, knowing that I've hit my mark.</p>
        		</div>
        	</div>
        </div>
            
        </div>
    );
};

export default AllExDetails;