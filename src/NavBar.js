import React from 'react';
import './NavBar.css'; // Import the CSS file

function NavBar() {
    return (
        <div className="Bar">
            <div className="NavBarItem">
                <h1 className="logo">Tune</h1>
            </div>
            <div className="NavBarItem">
                <h2>Links</h2>
            </div>
            <div className="NavBarItem">
                <h2>Help</h2>
            </div>
            <div className="NavBarItem">
                <h2>Test</h2>
            </div>
        </div>
    );
}

export default NavBar;
