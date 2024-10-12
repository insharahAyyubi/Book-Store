import {useState, useEffect} from "react";
import Card from "./Card";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://book-store-backend-wj1e.onrender.com/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="flex flex-col  items-center justify-center">
          <h1 className="text-2xl mt-28 font-semibold md:text-4xl text-center">
            Browse Through Our{" "}
            <span className="text-orange-500">Exclusive</span> Collection!
          </h1>
          <p className="text-xl text-slate-800 dark:text-white text-center mt-6 md:mt-10 p-4">
            Indulge in the joy of reading with our curated selection of paid
            books. From bestsellers to hidden gems, our collection has something
            for every reader. Buy now and treat yourself to a literary
            adventure!
          </p>
        </div>
        <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {book?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
