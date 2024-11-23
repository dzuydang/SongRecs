import React from 'react';
import NavBar from './NavBar';
import BigText from './BigText';
import HomeBody from './HomeBody';
import './global.css'; // Import global styles

function App(){
    return(
        <div>
            <NavBar/>
            <BigText/>
            <HomeBody/>
        </div>
    );
}

export default App;