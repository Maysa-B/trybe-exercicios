import React from 'react';
import { useState } from 'react';
import useArray from './useArray';

function ParaFixarAgain() {
  const [currentTxt, setCurrentTxt] = useState('');
  const [todoList, atualizeList] = useArray();

  const handleChange = ({target}) => {
    setCurrentTxt(target.value);
  }

  return (
    <div>
      <input 
        type="text"
        onChange={handleChange}
        value={currentTxt}
      />
      <button onClick={() => atualizeList(currentTxt)}>ADD</button>
      <ul>
        {todoList.map((curr) => <li key={curr}>{curr}</li>)}
      </ul>
    </div>
  )
}

export default ParaFixarAgain;