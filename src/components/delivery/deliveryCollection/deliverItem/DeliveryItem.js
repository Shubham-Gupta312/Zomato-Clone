import React from 'react'
import "../deliverItem/DeliveryItem.css";

const DeliveryItem = ({item}) => {
  return (
    <div>
      <div className='delivery-item-cover cur-po'>
        <img src={item.cover} alt={item.title} className='delivery-item-image' />
      </div>
      <div className='delivery-item-title cur-po'>
        {item.title}
      </div>
    </div>
  )
}

export default DeliveryItem
