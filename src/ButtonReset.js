import React from 'react';

const ButtonReset = (props) => {
    
    return(
        
           <button 
                onClick={props.doResetData}
                className="sortBtn"
                disabled={props.reset}>
                Reset
            </button>
           
            
        )
    }


export default ButtonReset;