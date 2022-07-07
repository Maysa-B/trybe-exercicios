import React, { useState, useEffect } from 'react';

function ParaFixar() {
  const [number, setNumber] = useState(0);
  const [aparece, setAparece] = useState(false);
  const [timer, setTimer] = useState(false);

  const fourSeconds = () => {
    setTimeout(() => setAparece(false), 4000);
  }

  const tenSeconds = () => {
    setTimeout(() => setTimer(!timer), 10000);
  }

  useEffect(() => {
    const generateNewNumber = () => {
      const newNumber = Math.floor(Math.random() * 100) + 1;
      setNumber(newNumber);
      if (newNumber % 5 === 0 || newNumber % 3 === 0) {
        setAparece(true);
        fourSeconds();
      }
      tenSeconds();
    }
    generateNewNumber();
  }, [timer]);

  return (
    <div>
      <h1>{number}</h1>
      <h2>{aparece && 'Acerto'}</h2>
    </div>
  );
}

export default ParaFixar;