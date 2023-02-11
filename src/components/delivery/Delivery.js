import React from "react";
import Filter from "../common/filters/Filter";
import { BsFilterCircleFill } from "react-icons/bs";
import { MdDeliveryDining } from "react-icons/md";
import DeliveryCollection from "./deliveryCollection/DeliveryCollection";
import TopBrand from "./topBrands/TopBrand";
import Explore from "../common/explore/Explore";
import { Resturant } from "../../data/Resturants";

const deliverFilter = [
  {
    id: 1,
    icon: <BsFilterCircleFill />,
    title: "Filter",
  },
  {
    id: 2,
    title: "Rating 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <MdDeliveryDining />,
  },
  {
    id: 5,
    title: "Great Offers",
  },
];

const resturantsList = Resturant;
const Delivery = () => {
  return (
    <div>
      <div>
        <Filter filterList={deliverFilter} />
      </div>
      <DeliveryCollection/>
      <TopBrand/>
      <Explore list={resturantsList} collectionName='Delivery Restaurants in Delhi NCR'/>
    </div>
  );
};

export default Delivery;
