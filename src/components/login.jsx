

export default function Login({setShow}){

    const inputStyle = "w-full border border-gray-300 px-2 py-4 rounded-lg focus:ring-purple-500 focus:border-purple-500"

    return(
        <div className="w-full lg:col-span-1 bg-white p-8 rounded-b-lg lg:rounded-r-lg xl:h-3/4 flex flex-col gap-12">
    <div className="text-center mb-6 flex flex-col gap-2">
      <h2 className="text-blue-800 text-3xl font-bold">SIGN IN</h2>
      <p className="text-sm text-gray-500">
      Don’t have an account yet?
        <button onClick={()=>setShow(true)} className="text-blue-800 font-medium hover:underline xl:px-2">SIGN UP</button>
      </p>
    </div>

    <form action="#" method="POST" className=" lg:px-24  flex flex-col gap-12">
    <div className="space-y-4">
      
      <div>
        <input
          type="email"
          id="email"
          className={inputStyle}
          placeholder="Email Address"
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          className={inputStyle}
          placeholder="Password"
        />
      </div>
    </div>

      <button
        type="button"
        className="w-full bg-blue-800 text-white py-4 rounded-lg font-semibold hover:bg-blue-800"
      >
        Sign IN
      </button>


    </form>


  </div>
    )
}