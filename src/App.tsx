import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Space, Input, Progress, Slider} from 'antd';
import SpinFC from 'antd/lib/spin';
import Tabled from './components/Table';
import './App.scss'


function App() {
  return (
    <div className="App">
     <Tabled/>
    </div>
  );
}

export default App;
