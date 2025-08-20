import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import clock from "/src/assets/clock.png";
import wacth from "/src/assets/band.png";
import bucket from "/src/assets/bucket.png";
import cat from "/src/assets/cat.png";
import { Link } from "react-router-dom";
import Image from "../Image";
import addsTwo from "/src/assets/ads2.png";
import bottle from "/src/assets/bottol.png";
import backPack from "/src/assets/bagpack.png";
import mashla from "/src/assets/moshla.png";
import munna from "/src/assets/backpacktwo.png";

import cap from "/src/assets/cap.png";
import table from "/src/assets/table.png";
import headphn from "/src/assets/headephn.png";
import sunglass from "/src/assets/sunglass.png";

// ==============================
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
// ==============================

const NewArrivals = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Container></Container>
      <div className="py-6">
        <Container>
          <h3 className="text-[39px] font-bold text-menuHover mb-[50px]">
            New Arrivals
          </h3>
          {/* =============== */}
          <Slider {...settings}>
            <div>
              <Product productImg={clock} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={wacth} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={bucket} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={cat} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={clock} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={wacth} bdgText={"New"} />
            </div>
          </Slider>
          {/* =============== */}
        </Container>
      </div>
      <div className="py-6">
        <Container>
          <h3 className="text-[39px] font-bold text-menuHover my-[70px]">
            Our Bestsellers
          </h3>
          {/* =============== */}
          <Slider {...settings}>
            <div>
              <Product productImg={bottle} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={backPack} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={mashla} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={munna} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={bottle} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={backPack} bdgText={"New"} />
            </div>
          </Slider>
          {/* =============== */}
        </Container>
      </div>
      <div className="py-[100px]">
        <Container>
          <Link to={"/"}>
            <Image imgSrc={addsTwo} className={"w-full"} />
          </Link>
        </Container>
      </div>
      <div className="pb-[60px]">
        <Container>
          <h3 className="text-[39px] font-bold text-menuHove mb-[50px]">
            Special Offers
          </h3>
           {/* =============== */}
          <Slider {...settings}>
            <div>
              <Product productImg={cap} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={table} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={headphn} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={sunglass} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={cap} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={headphn} bdgText={"New"} />
            </div>
          </Slider>
          {/* =============== */}
        
        </Container>
      </div>
    </>
  );
};

export default NewArrivals;
