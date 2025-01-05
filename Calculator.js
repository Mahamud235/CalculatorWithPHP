import React, { useState } from "react";

function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operation, setOperation] = useState("");

  const styles = {
    calculator: {
      width: "300px",
      background: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      margin: "auto",
      fontFamily: "Arial, sans-serif",
    },
    operationScreen: {
      width: "100%",
      height: "25px",
      textAlign: "right",
      fontSize: "0.9em",
      marginBottom: "5px",
      paddingRight: "10px",
      background: "#f9f9f9",
      color: "#777",
      border: "none",
      boxSizing: "border-box",
    },
    screen: {
      width: "100%",
      height: "50px",
      textAlign: "right",
      fontSize: "1.2em",
      marginBottom: "10px",
      padding: "10px",
      background: "#e6e6e6",
      borderRadius: "4px",
      border: "1px solid #ccc",
      boxSizing: "border-box",
      overflow: "hidden",
    },
    buttons: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "10px",
    },
    button: {
      height: "50px",
      fontSize: "1.2em",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    },
    buttonDefault: {
      background: "#007bff",
      color: "#fff",
    },
    buttonOperation: {
      background: "#ff5722",
      color: "#fff",
    },
    buttonEqual: {
      background: "#4caf50",
      color: "#fff",
    },
    buttonHover: {
      background: "#0056b3",
    },
  };

  const appendNumber = (number) => {
    setCurrentValue((prev) => prev + number);
  };

  const handleOperation = (op) => {
    if (currentValue === "") return;
    if (previousValue !== "") {
      calculate();
    } else {
      setPreviousValue(currentValue);
    }
    setOperation(op);
    setCurrentValue("");
  };

  const calculate = () => {
    if (operation === "" || currentValue === "") return;

    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);
    let result = "";

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Error";
        break;
      default:
        return;
    }

    setCurrentValue(result.toString());
    setPreviousValue("");
    setOperation("");
  };

  const clearScreen = () => {
    setCurrentValue("");
    setPreviousValue("");
    setOperation("");
  };

  const updateOperationScreen = () => {
    if (previousValue && operation) {
      return `${previousValue} ${operation}`;
    }
    return "";
  };

  return (
    <div style={styles.calculator}>
      <div style={styles.operationScreen}>{updateOperationScreen()}</div>
      <input style={styles.screen} type="text" value={currentValue} disabled />
      <div style={styles.buttons}>
        {["7", "8", "9"].map((num) => (
          <button
            key={num}
            style={{ ...styles.button, ...styles.buttonDefault }}
            onClick={() => appendNumber(num)}
          >
            {num}
          </button>
        ))}
        <button
          style={{ ...styles.button, ...styles.buttonOperation }}
          onClick={() => handleOperation("/")}
        >
          /
        </button>

        {["4", "5", "6"].map((num) => (
          <button
            key={num}
            style={{ ...styles.button, ...styles.buttonDefault }}
            onClick={() => appendNumber(num)}
          >
            {num}
          </button>
        ))}
        <button
          style={{ ...styles.button, ...styles.buttonOperation }}
          onClick={() => handleOperation("*")}
        >
          *
        </button>

        {["1", "2", "3"].map((num) => (
          <button
            key={num}
            style={{ ...styles.button, ...styles.buttonDefault }}
            onClick={() => appendNumber(num)}
          >
            {num}
          </button>
        ))}
        <button
          style={{ ...styles.button, ...styles.buttonOperation }}
          onClick={() => handleOperation("-")}
        >
          -
        </button>

        <button
          style={{ ...styles.button, ...styles.buttonDefault }}
          onClick={() => appendNumber("0")}
        >
          0
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonDefault }}
          onClick={clearScreen}
        >
          C
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonEqual }}
          onClick={calculate}
        >
          =
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonOperation }}
          onClick={() => handleOperation("+")}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
