import React from "react";
import "../exploreCard/ExploreCard.css";
import { AiTwotoneStar } from "react-icons/ai";

const ExploreCard = ({ resturant }) => {
  const name = resturant?.info?.name ?? "";
  const coverImg = resturant?.info?.image?.url;
  const deliveryTime = resturant?.order?.deliveryTime;
  const rating = resturant?.info?.rating?.rating_text;
  const approxPrice = resturant?.info?.cfo?.text;
  const offer = resturant?.bulkOffers ?? [];
  const cuisine = resturant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainers = resturant?.bottomContainers;
  const goldOff = resturant?.gold?.text;
  const proOff = offer.length > 1 ? offer[0].text : null;
  const discount =
    offer.length > 1
      ? offer[1].text
      : offer.length === 1
      ? offer[0].text
      : null;

  return (
    <div className="explore-card cur-po">
      <div className="explore-card-cover">
        <img className="explore-card-image" src={coverImg} alt={name} />
        <div className="delivery-time">{deliveryTime}</div>
        {proOff && <div className="pro-off">{proOff}</div>}
        {goldOff && <div className="gold-off absolute-center">{goldOff}</div>}
        {discount && <div className="discount absolute-center">{discount}</div>}
      </div>
      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && (
          <div className="res-rating absolute-center">
            {rating} <AiTwotoneStar className="icon absolute-center"/>
          </div>
        )}
      </div>

      <div className="res-row">
        {cuisine.length && (
          <div className="res-cuisine">
            {cuisine.map((item, i) => {
              return (
                <span className="res-cuisine-tag">
                  {item}
                  {i == cuisine.length - 1 && ","}
                </span>
              );
            })}
            
          </div>
        )}
        {approxPrice && <div className="approx-price">{approxPrice}</div>}
      </div>
      {bottomContainers.length > 0 && (
        <div>
          <div className="card-separator"></div>
          <div className="explore-bottom">
            <img
              src={bottomContainers[0]?.image?.url}
              alt={bottomContainers[0]?.text}
              style={{ height: "18px" }}
            />
            <div className="res-bottom-text">{bottomContainers[0]?.text}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreCard;
