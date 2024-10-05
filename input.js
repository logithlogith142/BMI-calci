import React from "react";
import { useState } from "react";
function Input() {
  const [height, setheight] = useState("");
  const [status, setstatus] = useState(null);
  const [color, setcolor] = useState("");

  const [weight, setweight] = useState("");
  const [error, seterror] = useState("");
  const [style, setstyle] = useState("");
  const [bmi, setbmi] = useState(null);

  const result = () => {
    const h = height / 100;
    const bmi1 = weight / (h * h);
    setbmi(bmi1.toFixed(1));
    if (height && weight) {
      seterror(" ");
      setstyle(" ");
      if (bmi1 < 18.5) {
        setstatus("under weight");
        setcolor("white");
      } else if (bmi1 >= 18.5 && bmi1 <= 24.9) {
        setstatus("normal weight");
        setcolor("green");
      } else if (bmi1 >= 25 && bmi1 <= 29.9) {
        setstatus(" over weighted");
        setcolor("orange");
      } else {
        setstatus("very fat");
        setcolor("red");
      }
    } else {
      seterror("please enter the values");
      setstyle("input2");
    }
  };
  const clear = () => {
    setheight(" ");
    setweight(" ");
  };

  return (
    <>
      <div className="container">
        <div>
          <p>{error}</p>
          <label>
            HEIGHT (cm)
            <input
              className={style}
              type="text"
              value={height}
              onChange={(e) => {
                setheight(e.target.value);
              }}
            />
          </label>
          <label>
            WEIGHT
            <input
              className={style}
              type="text"
              value={weight}
              onChange={(e) => {
                setweight(e.target.value);
              }}
            />
          </label>

          <button className="confirm" onClick={result}>
            submit
          </button>
          <button onClick={clear}>clear</button>
          {bmi !== null && (
            <div className="bmi">
              <h4 className={color}>your bmi value is : {bmi}</h4>
              <h5 className={color}>your bmi status : {status}</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Input;
