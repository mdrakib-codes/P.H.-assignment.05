import logo from '../assets/banner-stack.png'

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left Side */}
          <div className="md:w-1/2">
            <h1 className=" md:text-5xl font-bold text-gray-900 leading-tight">
              Build Your Ideal <br/>
              <span className="bg-gradient-to-r from-orange-500 via-[#D91B7E] to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-5 text-gray-600 text-lg leading-7 max-w-xl">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits your
              next project.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="rounded-full bg-gradient-to-r from-orange-500 via-[#D91B7E] to-purple-600 px-6 py-3 font-medium text-white shadow-sm hover:opacity-95 transition">
                Explore Technologies
              </button>

              <button className="rounded-full border border-gray-300 hover:border-gray-400 px-6 py-3 font-medium text-gray-700 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w- flex justify-between">
            <img
              src={logo}
              alt=""
            
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero;