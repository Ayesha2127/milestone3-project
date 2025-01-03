import Image from "next/image"
import { IoMdAddCircle } from "react-icons/io";
export default function Mocha() {
  return (
    <section>
          <div className="flex flex-wrap text-3xl justify-center items-center text-center font-bold text-[#5D300E] py-4 px-4">OUR SPECIAL MOCHA</div>
          
          <div className="flex flex-wrap justify-center gap-8 py-6">
    
            {/* First Product */}
            <div className="border border-[#5D300E]  shadow-2xl rounded-2xl w-[250px] h-[400px] flex flex-col justify-center items-center">
              <div>
                <Image src={"/m1.png"} alt="c1" width={200} height={200} />
              </div>
              <h1 className="text-[#5D300E] font-bold text-xl text-center py-2">Nutella Mocha</h1>
              <p className="text-center">Rich espresso drink blended with Nutella hazelnut spread and chocolate syrup.</p>
              <p className="flex justify-center items-center gap-7 py-2">
                <span className="font-bold text-lg text-[#5D300E]">$20</span>
                <IoMdAddCircle size={30} />
              </p>
            </div>
    
    
            {/* Second Product */}
            <div className="border border-[#5D300E] shadow-2xl rounded-2xl w-[250px] h-[400px] flex flex-col justify-center items-center">
              <div>
                <Image src={"/m3.png"} alt="c1" width={200} height={200} />
              </div>
              <h1 className="text-[#5D300E] shadow-2xl font-bold text-xl text-center py-2">Almond Mocha</h1>
              <p  className="text-center">A delicious mocha with almond syrup, adding a nutty flavor with chocolate and whipped cream..</p>
              <p className="flex justify-center items-center gap-7 py-2">
                <span className="font-bold text-lg text-[#5D300E]">$30</span>
                <IoMdAddCircle size={30} />
              </p>
            </div>
    
            
            {/* third Product */}
            <div className="border border-[#5D300E] shadow-2xl rounded-2xl w-[250px] h-[400px] flex flex-col justify-center items-center">
              <div>
                <Image src={"/m2.png"} alt="c1" width={200} height={200} />
              </div>
              <h1 className="text-[#5D300E] font-bold text-xl text-center py-2">Raspberry Mocha</h1>
              <p  className="text-center">A sweet and tangy mocha made with raspberry syrup and chocolate,with whipped cream.</p>
              <p className="flex justify-center items-center gap-7 py-2">
                <span className="font-bold text-lg text-[#5D300E]">$25</span>
                <IoMdAddCircle size={30} />
              </p>
            </div>

            {/* fourth Product */}
            <div className="border border-[#5D300E] shadow-2xl rounded-2xl w-[250px] h-[400px] flex flex-col justify-center items-center">
              <div>
                <Image src={"/c5.png"} alt="c1" width={200} height={200} />
              </div>
              <h1 className="text-[#5D300E] font-bold text-xl text-center py-2">Iced Mocha</h1>
              <p  className="text-center">Chilled espresso combined with chocolate syrup, milk, and ice, topped with whipped cream for a refreshing treat.</p>
              <p className="flex justify-center items-center gap-7 py-2">
                <span className="font-bold text-lg text-[#5D300E]">$40</span>
                <IoMdAddCircle size={30} />
              </p>
            </div>

            
            </div>
            </section>
    
  ) 
        }