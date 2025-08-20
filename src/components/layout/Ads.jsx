import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import adone from "/src/assets/ad1.png"
import adTwo from "/src/assets/ad2.png"
import adThree from "/src/assets/ad3.png"
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <>
      <div className="py-6">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[49%]">
              <Link to={"/"}>
              <Image imgSrc={adone} className={"w-full"}/>
              </Link>
            </div>
            <div className="w-[49%]">
              <Link to={"/"}>
              <Image imgSrc={adTwo} className={"w-full mb-[35px]"}/>
              </Link>
              <Link to={"/"}>
              <Image imgSrc={adThree} className={"w-full mt-[30px]"}/>
              </Link>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Ads;
