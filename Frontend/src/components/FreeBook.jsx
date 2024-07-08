import React from "react";
import list from "../list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

const FreeBook = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const filteredData = list.filter((data) => data.isFree === "true");
  console.log(filteredData);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16 md:mt-0">
        <div className="text-center">
          <h1 className="text-4xl text-gray-900 font-bold pb-2 dark:text-white">Free Books</h1>
          <p>Complimentary books at your fingertips!</p>
        </div>

        <div className="slider-container mt-14 mb-4">
          <Slider {...settings}>
            {filteredData.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
