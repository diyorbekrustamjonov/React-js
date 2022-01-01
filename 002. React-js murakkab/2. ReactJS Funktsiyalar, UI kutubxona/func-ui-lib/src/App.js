import { useState } from 'react';
import "./style/style.css";

import Counter from './component/Counter.js';
import InputVal from './component/InputVal';
import ToggleBtn from './component/ToggleBtn';
function App() {


  return (
    <>
      <div className="app w-50 mx-auto mt-5">
        <Counter />
        <ToggleBtn />
      <hr></hr>
        <InputVal />
      </div>
    </>

  );
}

export default App;
