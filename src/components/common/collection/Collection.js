import React from "react";
import "./Collection.css";
import { BsCaretRightFill } from "react-icons/bs";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/NextArrow";
import PrevArrow from "../../common/carousel/PrevArrow";

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Collection = ({ list }) => {
  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Collection</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </div>
          <div className="collection-location absolute-center cur-po">
            <div>All collections in Delhi NCR </div>
            <BsCaretRightFill className="absolute-center" />
          </div>
        </div>

        <Slider {...settings}>
          {list.map((item) => {
            return (
              <div>
                <div className="collection-cover cur-po">
                  <img src={item.cover} alt={item.title} className="collection-image" />
                  <div className="gradient-bg"></div>
                  <div className="collection-card-title">{item.title}</div>
                  <div className="collection-card-subtitle  absolute-center">
                    <div>{item.places}</div>
                    <BsCaretRightFill className="absolute-center"/>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Collection;
