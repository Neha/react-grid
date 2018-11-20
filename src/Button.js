import React from 'react';

const Button = (props) => {
        return(
           <button 
                onClick={props.doAlphabatelSort}
                disabled = {props.disableName}
                className="sortBtn"
                value="name">
                Sort By Name
               </button>
            )
            }   


export default Button;