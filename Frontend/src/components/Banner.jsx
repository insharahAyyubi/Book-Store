import React from "react";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl h-full md:h-screen container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full order-2 text-center sm:text-start md:order-1 md:w-1/2 mt-5 md:mt-36">
          <div className="space-y-10 p-4 md:p-0">
            <h1 className="text-4xl font-bold dark:text-white text-teal-950">
              Enter into the world of{" "}
              <span className="bg-gradient-to-r from-red-600 via-amber-400 to-teal-400 inline-block text-transparent bg-clip-text">
                fantasy
              </span>{" "}
              now!
            </h1>
            <p className="font-medium text-xl">
              Dive into our collection of free books and discover new worlds!
              From classics to bestsellers, we have something for everyone. Want
              more? <span className="font-bold text-orange-500">Sign up</span>{" "}
              for exclusive titles, author insights, and personalized recs.
              Start reading today and unlock a world of possibilities!
            </p>
            <input
              type="text"
              placeholder="Enter email to login"
              className="input input-bordered border-amber-400 w-full max-w-md"
            />
          </div>
          <button className="bg-orange-200 ml-4 md:ml-0 text-slate-700 px-4 transition duration-400 ease-in-out rounded-md py-1 outline-none mt-1 md:mt-6 hover:bg-orange-400 hover:text-white">
            Submit
          </button>
        </div>
        <div className="w-full order-1 mt-10 md:w-1/2 flex justify-center">
          <img className="h-auto md:ml-4" src="./banner.png" alt="banner" />
        </div>
      </div>
    </>
  );
};

export default Banner;
