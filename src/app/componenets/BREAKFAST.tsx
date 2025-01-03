import Image from "next/image"
import { IoMdAddCircle } from "react-icons/io";
export default function Breakfast() {
  return (
    <section>
          <div className="flex flex-wrap text-3xl justify-center items-center text-center font-bold text-[#5D300E] py-4 px-4">OUR EXOTIC BREAKFAST</div>
          
          <div className="flex flex-wrap justify-center gap-8 py-6">
    
            {/* First Product */}
            <div className="border border-[#5D300E] shadow-2xl rounded-2xl w-[250px] h-[400px] flex flex-col justify-center items-center">
              <div>
                <Image src={"/b1.png"} alt="c1" width={200} height={200} />
              </div>
              <h1 className="text-[#5D300E] font-bold text-xl text-center py-2">Classic Avocado Toast</h1>
              <p className="text-center">Toasted sourdough bread topped with smashed avocado, chili flakes, and a drizzle of olive oil.</p>
              <p className="flex justify-center items-center gap-7 py-2">
                <span className="font-bold text-lg text-[#5D300E]">$20</span>
                <IoMdAddCircle size={30} />
              </p>
            </div>
    
    
            {/* Second Product */}
            <div className="border border-[#5D300E] shadow-2xl rounded-2xl w-[250px] h-[400px] flex flex-col justify-center items-center">
              <div>
                <Image src={"/b2.png"} alt="c1" width={200} height={200} />
              </div>
              <h1 className="text-[#5D300E] font-bold text-xl text-center py-2">Cheese Croissant </h1>
              <p  className="text-center">Flaky croissant filled with scrambled eggs and melted cheddar cheese.</p>
              <p className="flex justify-center items-center gap-7 py-2">
                <span className="font-bold text-lg text-[#5D300E]">$30</span>
                <IoMdAddCircle size={30} />
              </p>
            </div>
    
            
            {/* third Product */}
            <div className="border border-[#5D300E] shadow-2xl rounded-2xl w-[250px] h-[400px] flex flex-col justify-center items-center">
              <div>
                <Image src={"/b3.png"} alt="c1" width={200} height={200} />
              </div>
              <h1 className="text-[#5D300E] font-bold text-xl text-center py-2">Pancakes with Syrup</h1>
              <p  className="text-center">Fluffy pancakes served with butter and a side of maple syrup.</p>
              <p className="flex justify-center items-center gap-7 py-2">
                <span className="font-bold text-lg text-[#5D300E]">$25</span>
                <IoMdAddCircle size={30} />
              </p>
            </div>
            </div>
            </section>
    
  ) 
        }