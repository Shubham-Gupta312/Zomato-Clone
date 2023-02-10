import React from "react";
import Filter from "../common/filters/Filter";
import { BsFilterCircleFill } from "react-icons/bs";
import { MdDeliveryDining } from "react-icons/md";
import DeliveryCollection from "./deliveryCollection/DeliveryCollection";

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

const Delivery = () => {
  return (
    <div>
      <div>
        <Filter filterList={deliverFilter} />
      </div>
      <DeliveryCollection/>
    </div>
  );
};

export default Delivery;
