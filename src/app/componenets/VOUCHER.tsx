export default function Voucher() {
return(
  <div className="px-24 border flex-wrap">
    <div className="flex flex-wrap text-3xl justify-center items-center text-center font-bold text-[#5D300E] py-4 px-4">OUR VOUCHERS</div>
   
   {/* First voucher */}
    <div className=" w-[400px] h-[100px] py-6 flex-wrap">
      <h1 className="font-bold text-xl  text-[#5D300E]">COFFEE20</h1>
      <p  className="flex-wrap">flat 20% on every first order of coffee online</p>
      <button className="border border-[#5D300E] rounded-lg py-2 px-2 mt-3 bg-[#DAB692] font-bold">Apply Voucher</button>
    </div>

    {/* second voucher */}
    <div className=" w-[400px] h-[100px] py-6 mt-8 flex-wrap">
      <h1 className="font-bold text-xl  text-[#5D300E]">CARAMEL10</h1>
      <p className="flex-wrap">flat 10% of with every 4 roasted caramel </p>
      <button className="border border-[#5D300E] rounded-lg py-2 px-2 mt-3 bg-[#DAB692] font-bold">Apply Voucher</button>
    </div>

    {/* third voucher */}
    <div className=" w-[400px] h-[100px] py-6 mt-8 flex-wrap">
      <h1 className="font-bold text-xl  text-[#5D300E]">FRIJOY15</h1>
      <p className="flex-wrap">flat 15% of on on every Friday</p>
      <button className="border border-[#5D300E] rounded-lg py-2 px-2 mt-3 bg-[#DAB692] font-bold">Apply Voucher</button>
    </div>

    {/* fourth voucher */}
    <div className=" w-[400px] h-[100px] py-6 mt-8 flex-wrap">
      <h1 className="font-bold text-xl  text-[#5D300E]">PINKBEANS25</h1>
      <p className="flex-wrap">flat 25% of from girls account</p>
      <button className="border border-[#5D300E] rounded-lg py-2 px-2 mt-3 bg-[#DAB692] font-bold">Apply Voucher</button>
    </div>

    {/* fifth voucher */}
    <div className=" w-[400px] h-[100px] py-6 mt-8 flex-wrap">
      <h1 className="font-bold text-xl  text-[#5D300E]">BEANBRO5</h1>
      <p className="flex-wrap">flat 5% of from boys account</p>
      <button className="border border-[#5D300E] rounded-lg py-2 px-2 mt-3 bg-[#DAB692] font-bold">Apply Voucher</button>
    </div>

  </div>
)
}