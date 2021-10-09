import "./styles.css";
import { useState } from "react";
 
export default function App() {
 var [num, setNum] = useState("");
 const [result, setResult] = useState("");
 
 num = Number(num);
 
 
 
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
