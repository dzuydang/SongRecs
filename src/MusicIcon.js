import React from 'react';
import { ReactComponent as MusicIcon } from './img/undraw_music_re_a2jk.svg';

const App = () => {
  return (
    <div>
      <h1>My SVG Icon</h1>
      <MusicIcon style={{ width: '200px', height: '200px', fill: '#6c63ff' }} />
    </div>
  );
};

export default App;



