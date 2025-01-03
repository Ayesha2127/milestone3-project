export default function SignUp(){
    return(
        <section>
            <div className="flex flex-col justify-center items-center">
            <div className="flex flex-wrap text-3xl justify-center items-center text-center font-bold text-[#5D300E] py-4 px-4">Sign Up</div>
  <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-4">
    <input
      type="text"
      placeholder="Username"
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
      type="password"
      placeholder="Password"
      required
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D300E]"
    />
    <input
      type="password"
      placeholder="Confirm Password"
      required
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D300E]"
    />
    <div className="flex justify-center">
      <button
        type="submit"
        className="py-3 px-6 bg-[#5D300E] text-white font-bold rounded-lg hover:bg-[#3B200A] transition duration-300"
      >
        Sign Up
      </button>
    </div>
    <p className="text-sm text-center text-gray-500">
      Already have an account?{" "}
      <a href="#" className="text-[#5D300E] font-bold hover:underline">
        Login
      </a>
    </p>
  </form>
</div>

        </section>
    )
}