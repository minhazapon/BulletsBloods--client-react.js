

const Banner = () => {


    return (
        <div className="  bg-no-repeat bg-cover  p-52 "
         
        style={{
            backgroundImage: "url(  https://img.freepik.com/premium-photo/advanced-energy-weapons-dramatic-battle-scene-futuristic-combat-intense-action_1126694-86227.jpg?w=826   )",
          }}
        
        
        >
         
          <div className=" bg-gradient-to-r from-black p-10 rounded-xl ">
               <div className=" flex justify-start ">
               <a className=" flex justify-start text-2xl  text-red-600 "><span className=' text-yellow-300'>Bullets</span>Bloods</a>
               <img className=' h-[50px]' src="https://cdn-icons-png.flaticon.com/128/967/967119.png" alt="" />
               </div>
               <div>
                  <p className=" flex justify-start text-3xl font-thin text-white ">"An armed society is a polite society." - Robert Heinlein</p>
                  <div className=" flex justify-start mt-5">
                  <a href="#_" class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-black border-[1px] border-yellow-300 text-black inline-block">
                  <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow-300 group-hover:h-full opacity-90"></span>
                  <span class="relative text-white">Shop</span>
                  </a>
                  </div>
               </div>
          </div>

            
        </div>
    );
};

export default Banner;