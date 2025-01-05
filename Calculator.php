<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .calculator {
            width: 300px;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .screen {
            width: 100%;
            height: 50px;
            text-align: right;
            font-size: 1.2em;
            margin-bottom: 10px;
            padding: 10px;
            background: #e6e6e6;
            border-radius: 4px;
            border: 1px solid #ccc;
            box-sizing: border-box;
            overflow: hidden;
        }
        .operation-screen {
            width: 100%;
            height: 25px;
            text-align: right;
            font-size: 0.9em;
            margin-bottom: 5px;
            padding-right: 10px;
            background: #f9f9f9;
            color: #777;
            border: none;
            box-sizing: border-box;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        button {
            height: 50px;
            font-size: 1.2em;
            border: none;
            background: #007BFF;
            color: #fff;
            border-radius: 4px;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        button:hover {
            background: #0056b3;
        }
        button.operation {
            background: #FF5722;
        }
        button.operation:hover {
            background: #E64A19;
        }
        button.equal {
            background: #4CAF50;
        }
        button.equal:hover {
            background: #388E3C;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <div class="operation-screen" id="operationScreen"></div>
        <input class="screen" type="text" id="screen" value="" disabled>
        <div class="buttons">
            <button onclick="appendNumber('7')">7</button>
            <button onclick="appendNumber('8')">8</button>
            <button onclick="appendNumber('9')">9</button>
            <button class="operation" onclick="setOperation('/')">/</button>

            <button onclick="appendNumber('4')">4</button>
            <button onclick="appendNumber('5')">5</button>
            <button onclick="appendNumber('6')">6</button>
            <button class="operation" onclick="setOperation('*')">*</button>

            <button onclick="appendNumber('1')">1</button>
            <button onclick="appendNumber('2')">2</button>
            <button onclick="appendNumber('3')">3</button>
            <button class="operation" onclick="setOperation('-')">-</button>

            <button onclick="appendNumber('0')">0</button>
            <button onclick="clearScreen()">C</button>
            <button class="equal" onclick="calculateResult()">=</button>
            <button class="operation" onclick="setOperation('+')">+</button>
        </div>
    </div>

    <script>
        let currentValue = '';
        let previousValue = '';
        let operation = '';

        function appendNumber(number) {
            currentValue += number;
            updateScreen();
        }

        function setOperation(op) {
            if (currentValue === '') return;

            if (previousValue !== '') {
                calculateResult();
            }
            operation = op;
            previousValue = currentValue;
            currentValue = '';
            updateOperationScreen();
        }

        function calculateResult() {
            if (operation === '' || currentValue === '') return;

            const num1 = parseFloat(previousValue);
            const num2 = parseFloat(currentValue);
            let result = 0;

            switch (operation) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num2 !== 0 ? num1 / num2 : 'Error';
                    break;
            }

            currentValue = result.toString();
            operation = '';
            previousValue = '';
            updateScreen();
            clearOperationScreen();
        }

        function clearScreen() {
            currentValue = '';
            previousValue = '';
            operation = '';
            updateScreen();
            clearOperationScreen();
        }

        function updateScreen() {
            const screen = document.getElementById('screen');
            screen.value = currentValue;
        }

        function updateOperationScreen() {
            const operationScreen = document.getElementById('operationScreen');
            operationScreen.innerHTML = `${previousValue} ${operation}`;
        }

        function clearOperationScreen() {
            const operationScreen = document.getElementById('operationScreen');
            operationScreen.innerHTML = '';
        }
    </script>
</body>
</html>
