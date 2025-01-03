import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
    return (
      <div className="bg-[#5D300E] text-white  mt-12">
  
            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center items-center text-center py-4">
              <span><BsInstagram size={30} /></span>
              <span><FaFacebook size={30}/></span>
              <span><AiFillTwitterCircle size={30} />
              </span>
            </div>
         
  
          {/* Footer Bottom */}
          <div className="text-center py-4">
            <p className="text-sm">&copy; {new Date().getFullYear()} Caffeine Blend. All rights reserved.</p>
          </div>
          </div>
    );
  }
  