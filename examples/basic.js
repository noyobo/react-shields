import React from 'react';
import ReactDOM from 'react-dom';

import Shields from 'react-shields';

ReactDOM.render(
  <div style={{ margin: '20px 20px 20px', textAlign: 'center' }}>
    <Shields subject="react-shields" status="0.1.1" color="green" />
    <Shields subject="react-shields" status="0.1.1" color="yellow" />
    <Shields subject="react-shields" status="0.1.1" color="red" />
  </div>,
  document.getElementById('__react-content')
);
