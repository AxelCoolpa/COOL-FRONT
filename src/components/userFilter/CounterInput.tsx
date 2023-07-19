import React, { useState } from "react";

const CounterInput: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          border: "1px solid gray",
          borderRadius: "5px",
          opacity: "0.3",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "23vw",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "21vw",
            marginBottom: "1vw",
          }}
        >
          <div
            style={{
              font: "bold",
              fontSize: "1em",
              marginLeft: "1vw",
            }}
          >
            <p>Adultos</p>
            <p>(17-99)</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "6vw",
              justifyContent: "space-between",
            }}
          >
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "9px",
                borderRadius: "50%",
                border: "1px solid red",
                width: "20px",
                color: "red",
                transition: "background 0.3s ease",
                fontWeight: "bold",
                height: "20px",
                fontSize: "1.5em",
                margin: "3px 3px",
              }}
              onClick={() => setCount(count - 1)}
              disabled={count <= 1}
            >
              -
            </button>
            <span
              style={{
                display: "flex",
                fontSize: "1.5em",
                marginTop: "-5px",
              }}
            >
              {count}
            </span>
            <button
              onClick={() => setCount(count + 1)}
              disabled={count >= 10}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "9px",
                borderRadius: "50%",
                border: "1px solid red",
                width: "20px",
                transition: "background 0.3s ease",
                fontWeight: "bold",
                color: "red",
                margin: "3px 3px",
                height: "20px",
                fontSize: "1.5em",
              }}
            >
              +
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "21vw",
          }}
        >
          <div
            style={{
              font: "bold",
              fontSize: "1em",
              marginLeft: "1vw",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSmooth: "black",
              }}
            >
              Niños
            </p>
            <p>(4-16)</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "6vw",
              justifyContent: "space-between",
            }}
          >
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "9px",
                borderRadius: "50%",
                border: "1px solid red",
                width: "20px",
                color: "red",
                height: "20px",
                transition: "background 0.3s ease",
                fontWeight: "bold",
                fontSize: "1.5em",
                margin: "3px 3px",
              }}
              onClick={() => setCount(count - 1)}
              disabled={count <= 1}
            >
              -
            </button>
            <span
              style={{
                display: "flex",
                fontSize: "1.5em",
                marginTop: "-5px",
              }}
            >
              {count}
            </span>
            <button
              onClick={() => setCount(count + 1)}
              disabled={count >= 10}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "9px",
                borderRadius: "50%",
                border: "1px solid red",
                width: "20px",
                transition: "background 0.3s ease",
                fontWeight: "bold",
                color: "red",
                margin: "3px 3px",
                height: "20px",
                fontSize: "1.5em",
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterInput;
