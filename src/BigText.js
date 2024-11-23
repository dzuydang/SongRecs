import React from 'react';
import './BigText.css'; // Import the CSS file

function BigText(){
    return(
        <div class="BigText">
            <div >
                <h1 className="Text">
                    Song Recommendations, <span className="colorChange">Personalized</span>
                </h1>
            </div>
        </div>
    );
}

export default BigText;