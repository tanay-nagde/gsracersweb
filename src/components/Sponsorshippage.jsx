import React from "react";
import Glowcard from "./Glowcard";
import data from "../utils/sponsordata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import sponsorpackage from "../utils/sponsorpackage";
import imagedata from "../utils/sponsorimagedata";
import Sponsorgrid from "./Sponsorgrid";

function Sponsorshippage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="py-10 w-full h-full roboto-regular ">
        <div className="w-full overflow-hidden">
          <div className="w-11/12 mx-auto">
            <div className="w-full">
              <h1 className="md:text-4xl text-2xl text-blue-300 font-bold text-center font-proracing">
                why sponsor us?
              </h1>
              <hr className="bg-blue-900 md:w-1/6 w-1/2 mx-auto border-none my-2 h-1" />
            </div>

            <div className="hidden lg:inline">
              <div className="md:w-[95%] md:mx-auto h-full lg:w-full 2xl:w-4/5">
                <Slider className=" overflow- " {...settings}>
                  {data.map((item) => (
                    <Glowcard
                      key={item.id}
                      img={item.img}
                      tittle={item.tittle}
                      content={item.content}
                    />
                  ))}
                </Slider>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-1 justify-center lg:hidden">
                {data.map((item) => (
                  <Glowcard
                    img={item.img}
                    tittle={item.tittle}
                    content={item.content}
                  />
                ))}
              </div>
            </div>

            <div className="py-20">
              <h1 className="md:text-4xl text-2xl text-blue-300 font-bold text-center font-proracing">
                sponsorship packages
              </h1>
              <hr className="bg-blue-900 md:w-1/6 w-1/2 mx-auto border-none my-2 h-1" />
            </div>

            <div className="flex flex-wrap gap-5 justify-center lg:w-4/5 lg:mx-auto">
              {sponsorpackage.map((item) => (
                <Card
                  category={item.category}
                  price={item.price}
                  features={item.features}
                />
              ))}
            </div>
            <div className="py-20">
              <h1 className="md:text-4xl text-2xl text-blue-300 font-bold text-center font-proracing">
                our sponsors
              </h1>
              <hr className="bg-blue-900 md:w-1/6 w-1/2 mx-auto border-none my-2 h-1" />
            </div>
                <div>
                  {imagedata.map((item) => (
                    <Sponsorgrid key={item.id} category={item.category} image={item.image} />
                  ))}

                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponsorshippage;
