import React from 'react';
import background from '../media/scene.png';


const Background = (props) => {
    
    const divBackground = {
    backgroundImage: `url(${background})`,
    backgroundRepeat  : 'no-repeat',
    width: '100%',
    height:'800px',
    position:'relative',
    marginLeft: "323px",
    marginTop: "0px"
} 
    return(
        <div style={divBackground} alt="Background">  
            {props.children}
        </div>
    ); 
}

export default Background;