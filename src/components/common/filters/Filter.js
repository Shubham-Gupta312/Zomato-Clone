import React from 'react';
import FilterItem from './filterItem/FilterItem';
import "./Filter.css";

const Filter = ({filterList}) => {
  return (
   <div className='max-width filters'>
        {filterList && filterList.map((filter)=>{
            return (
               <FilterItem filter={filter} key={filter.id}/>
            )
        })}
    </div>
    
  )
}

export default Filter
