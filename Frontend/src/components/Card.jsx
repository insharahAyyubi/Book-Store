import React from "react";

const Card = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="card bg-base-100 max-w-72 shadow-xl border border-slate-200 mx-auto my-0 dark:text-white dark:bg-slate-700 dark:border-slate-500 transition duration-300 ease-in-out hover:scale-105">
        <figure>
          <img className="grow object-contain max-h-52" src={item.img} alt="" />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title min-h-16 text-md overflow-hidden hover:overflow-y-auto">
            {item.title}
          </h2>
          <div className="badge bg-red-100 dark:text-black">Free</div>
          <p className="overflow-y-auto h-28">{item.description}</p>
          <div className="card-actions justify-end min-h-10">
            {item.category.map((i) => {
              return <div className="badge badge-outline" key={Math.random()}>{i}</div>;
            })}
          </div>
          <div className="flex items-center space-x-24 font-semibold">
            <div className="badge badge-md text-[17px] border-none dark:bg-slate-700 dark:text-white">${item.price}</div>
            <button className="bg-orange-200 font-medium px-7 transition duration-300 ease-in-out rounded-md py-1 outline-none text-slate-700 hover:bg-orange-400 hover:text-white">
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
