import logo from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-gray-50">

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-16">

        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">

          {/* Left Side */}
          <div className="w-full md:w-1/2">

            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-5xl">

              Build Your Ideal
              <br />

              <span className="brand-gradient-text">
                Development Stack
              </span>

            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that
              fits your next project.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#technologies"
                className="brand-gradient rounded-full px-6 py-3 font-medium text-white shadow-sm transition hover:scale-[1.02] hover:opacity-90"
              >
                Explore Technologies
              </a>

              <a
                href="#technologies"
                className="rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:border-gray-400 hover:bg-white"
              >
                Learn More
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex w-full justify-center md:w-1/2 md:justify-end">

            <img
              src={logo}
              alt="Development Stack Illustration"
              className="w-full max-w-md object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;