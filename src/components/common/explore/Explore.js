import React from 'react';
import '../explore/Explore.css';
import ExploreCard from './exploreCard/ExploreCard';

const Explore = ({list, collectionName}) => {
  return (
    <div className='max-width  explore-section'>
      <div className='collection-title'>{collectionName}</div>
      <div className='explore-grid'>
        {list.map((resturant)=>{
            return <ExploreCard resturant={resturant}/>
        })}
      </div>
    </div>
  )
}

export default Explore
