export default function Contact(){
    return(
        <section className="flex flex-col  justify-center items-center text-center ">
       <div className="flex flex-wrap text-3xl justify-center items-center text-center font-bold text-[#5D300E] py-4 px-4">GET IN TOUCH</div>
        <form className="w-1/2 max-w-md bg-white shadow-lg rounded-lg p-6 space-y-4 ">
          <input
            type="text"
            placeholder="First Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D300E]"
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D300E]"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D300E]"
          />
          <input
            type="text"
            placeholder="Phone Number"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D300E]"
          />
          <div className="flex justify-center">
           <button
             type="submit"
             className="py-3 px-6 bg-[#5D300E] text-white font-bold rounded-lg hover:bg-[#3B200A] transition duration-300">
            Submit
            </button>
    </div>
        </form>
      </section>
      
    )
}