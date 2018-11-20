import React from 'react';

const ButtonSortData = (props) => {
    return(
           <button 
                onClick={props.doRatingSort}
                disabled={props.rating}
                className="sortBtn"
                value="rating">
                Sort by Rating
            </button>
           )
    }


export default ButtonSortData;