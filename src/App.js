import Products from './Products.js';
import MyButton from './MyButton.js'
import CounterButton from './CounterButton.js';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState(false)

  const goToProducts = () => {
    setProducts(true)
  }

  const goBack = () => {
    setProducts(false)
  }

  const [sCount, setSCount] = useState(0)

  function handleClick() {
    setSCount(sCount + 1)
  }

  return (
    <>
      {products ? (<Products onBackClick={goBack}/>) : (<MyButton onButtonClick={goToProducts}/>
      )}  

      <h1>counters update</h1>
      <CounterButton count={sCount} onClick={handleClick} />
      <CounterButton count={sCount} onClick={handleClick} />
    </>
  );
}

export default App;
