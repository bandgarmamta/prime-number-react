import "./styles.css";
import { useState } from "react";

export default function App() {
  var [num, setNum] = useState("");
  const [result, setResult] = useState("");

  num = Number(num);

  function isPrime() {
    if (num >= 0) {
      if (num === 0 || num === 1) {
        setResult("It's neither prime nor composite");
      } else if (num === 2) {
        setResult("Yes! it is a prime number");
      } else {
        for (var i = 2; i <= Math.sqrt(num); i++) {
          if (num % i == 0) {
            setResult("No! it's not a prime number");
            break;
          } else {
            setResult("Yes! it is a prime number");
          }
        }
      }
    } else {
      setResult("Please enter a valid number");
    }
  }

  return (
    <div className="App">
      <h1>Check if a number is prime or not!</h1>
      <input
        id="txt-input"
        placeholder="Enter a number"
        onChange={(e) => setNum(e.target.value)}
        type="number"
      />
      <button id="btn-check" onClick={() => isPrime()}>
        Check
      </button>
      <div id="output">{result}</div>
    </div>
  );
}
