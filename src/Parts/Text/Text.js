import React from 'react';
import './Text.css'

const Text = (props) => {
return (

    <div className="center">

                <h1>{props.title}</h1>
                <p className="graph">
                  Anything embarrassing hidden in the middle of text.
                  All the Lorem Ipsum generators on <br></br> the Internet
                  tend to repeat predefined necessary.</p>
     </div>
);

}


export default Text;