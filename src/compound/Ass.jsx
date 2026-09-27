import { useState } from "react";

function Ass() {
  const [number, setNumber] = useState(0);

if (number <= -1) {

setNumber(number * 0)


};





  return (
    <div>
      <h1>Number</h1>

      <h2>{number}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Increase
      </button>

      <button onClick={() => setNumber(number - 1)}>
        Decrease
      </button>

      <button onClick={() => setNumber(number - number)}>
        Reset
      </button>






    </div>
  );
};

export default Ass;