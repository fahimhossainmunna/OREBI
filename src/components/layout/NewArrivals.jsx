import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import Hello from "/src/assets/cat.png";

import { Link } from "react-router-dom";
import Image from "../Image";




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
              <Product productImg={Hello} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Hello} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Hello} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Hello} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Hello} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Hello} bdgText={"New"} />
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
              <Product productImg={Hello} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Hello} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Hello} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Hello} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Hello} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Hello} bdgText={"New"} />
            </div>
          </Slider>
          {/* =============== */}
        </Container>
      </div>
      <div className="py-[100px]">
        <Container>
          <Link to={"/"}>
            <Image imgSrc={Hello} className={"w-full"} />
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
              <Product productImg={Hello} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Hello} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Hello} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Hello} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Hello} bdgText={"New"} />
            </div>
            <div>
              <Product productImg={Hello} bdgText={"New"} />
            </div>
          </Slider>
          {/* =============== */}
        
        </Container>
      </div>
    </>
  );
};

export default NewArrivals;
