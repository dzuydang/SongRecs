import React from 'react';
import './NavBar.css'; // Import the CSS file

function NavBar(){
    return(
        <div class="Bar">
            <ul>
                <div>
                    <h1 class="logo">SongRecs</h1>
                </div>
                <div class="NavBarItem">
                    <h1>Links</h1>
                </div>
                <div class="NavBarItem">
                    <h1>Help</h1>
                </div>
                <div class="NavBarItem">
                    <h1>Test</h1>
                </div>
            </ul>
        </div>
    );
}

export default NavBar;