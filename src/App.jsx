import React, { useState, useRef } from 'react';

function App() {

  // references for useRef Hook
  const inputRef = useRef(null);
  const resultRef = useRef(0);
  // const resultRef = useRef(null);

  // states to update the results in UI
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  // functions to perform arithmetic calculation
  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    if (Number(inputRef.current.value) === 0) {
      alert("Can't Divide By Zero!!!!");
    } else {
      setResult((result) => result / Number(inputRef.current.value));
    }
  }

  function resetInput(e) {
    e.preventDefault();
    setInput(inputRef.current.value = input);
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    // resultRef.current.value = 0;
  }

  return (
    <main className="grid justify-center items-center h-screen bg-black">
      <section className="grid overflow-hidden p-3 border-8 rounded-2xl border-blue-700 bg-gray-400/100 backdrop-blur-md shadow-[0_0_10px_5px_#e6eef0] hover:shadow-[0_0_15px_10px_#e6eef0] transition-all duration-500 ease-in-out  hover:animate-[borderAnimation_4s_infinite]">
        <div>
          <h1 className="text-md lg:text-3xl font-bold text-white head-animate">Input-Based React Calculator</h1>
        </div>
        <form className="flex flex-col items-center justify-center">
          <p ref={resultRef} className='text-2xl text-white'>{result}</p>
          {/* This line causes the app to not display */}
          {/* <p ref={resultRef}>{resultRef}</p> */}
          <input
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
            className='text-xl p-2.5 rounded-md mb-6 border-b-4 text-white border-b-blue-950 outline-none hover:animate-[borderAnimation_4s_infinite]'
          />
          <section className='grid gap-x-24 gap-y-2.5'>
            <button className='text-xl p-2.5 rounded mr-1 cursor-pointer border-2 border-transparent border-l-blue-600 border-r-purple-500 bg-gradient-to-r from-sky-300 to-blue-600 hover:border-white hover:text-white transition-all duration-500 ease-in-out hover:scale-110' onClick={plus}>Add</button>
            <button className='text-xl p-2.5 rounded mr-1 cursor-pointer border-2 border-transparent border-l-blue-600 border-r-purple-500 bg-gradient-to-r from-sky-300 to-blue-600 hover:border-white hover:text-white transition-all duration-500 ease-in-out hover:scale-110' onClick={minus}>Minus</button>
            <button className='text-xl p-2.5 rounded mr-1 cursor-pointer border-2 border-transparent border-l-blue-600 border-r-purple-500 bg-gradient-to-r from-sky-300 to-blue-600 hover:border-white hover:text-white transition-all duration-500 ease-in-out hover:scale-110' onClick={times}>Multiply</button>
            <button className='text-xl p-2.5 rounded mr-1 cursor-pointer border-2 border-transparent border-l-blue-600 border-r-purple-500 bg-gradient-to-r from-sky-300 to-blue-600 hover:border-white hover:text-white transition-all duration-500 ease-in-out hover:scale-110' onClick={divide}>Divide</button>
            <button className='text-xl p-2.5 rounded mr-1 cursor-pointer col-start-1 col-end-3 bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-transparent hover:border-white hover:text-white transition-all duration-500 ease-in-out hover:scale-110' onClick={resetInput}>Reset Input</button>
            <button className='text-xl p-2.5 rounded mr-1 cursor-pointer col-start-1 col-end-3 bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-transparent hover:border-white hover:text-white transition-all duration-500 ease-in-out hover:scale-110' onClick={resetResult}>Reset Result</button>
          </section>
        </form>
      </section>

    </main>
  );
}

export default App;
