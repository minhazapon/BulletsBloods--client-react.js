

const History = () => {
    return (
        <div className=" mb-10 bg-no-repeat bg-cover p-20 "
        
        style={{
            backgroundImage: "url(  https://img.freepik.com/free-photo/view-powerful-3d-gun_23-2150888769.jpg?t=st=1727928807~exp=1727932407~hmac=05166e2cd259df3ade5540cf95d32edd662e71b1aca9632fefdb1d65c5b67d14&w=826  )",
          }}
        
        
        >
            

            <div className=" flex justify-end">
                
            <div className=" bg-gradient-to-r from-black p-5 rounded-xl">
                <h1 className=" flex items-center gap-5">  
                    <p className=" text-5xl font-thin text-white">History</p>
                    <img className=" h-[70px]" src="https://cdn-icons-png.flaticon.com/128/3588/3588276.png" alt="" />
                </h1>
                <p className=" mt-6 font-thin text-white">A machine gun is a fully automatic and rifled<br></br> firearm designed for sustained direct fire<br></br> with rifle cartridges. The modern machine<br></br> gun was first invented in 1884 by Hiram Maxim</p>
                <p className=" mt-6 font-thin text-white">Machine guns are used against infantry, <br></br>low-flying aircraft, small boats, and<br></br> lightly armored land vehicles, and can<br></br> provide suppressive fire or enforce area <br></br>denial over a sector of land with grazing fire.</p>
                <div className=" mt-6">
                  <a href="#_" class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-black border-[1px] border-yellow-300 text-black inline-block">
                  <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow-300 group-hover:h-full opacity-90"></span>
                  <span class="relative text-white">READ MORE</span>
                  </a>
                </div>
            </div>



            </div>
            
           
 


        </div>
    );
};

export default History;