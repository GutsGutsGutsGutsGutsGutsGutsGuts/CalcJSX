const { useState } = React;

ReactDOM.render(
    <h2>211 + 323 = {211 + 323}</h2>,
    document.getElementById("app1")
    )
    
    const userClassName = "user-info";
    const styleObj = {
    color:'red',
    fontFamily:'Ravie',
    fontSize: '14pt'
    };
    const user = {
    id : 5,
    age: 33,
    firstName: 'Dmitriy',
    lastName: 'Sharaev',
    getFullName: function(){
    return `${this.firstName} ${this.lastName}`;
    }
    };
    
    ReactDOM.render(
    <div className={userClassName} style={styleObj}>
    <p>Полное имя: {user.getFullName()}</p>
    <p>Возраст: {user.age}</p>
    </div>,
    document.getElementById("app2")
    )

function App3() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [op, setOp] = useState("+");
  const [result, setResult] = useState(0);

  const calculate = () => {
    let res;
    switch (op) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num1 / num2;
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />

      <div>
        <button onClick={() => setOp("+")}>+</button>
        <button onClick={() => setOp("-")}>-</button>
        <button onClick={() => setOp("*")}>*</button>
        <button onClick={() => setOp("/")}>/</button>
      </div>

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />

      <button onClick={calculate}>Решить</button>

      <p>Результат: {result}</p>
    </div>
  );
}

ReactDOM.render(<App3 />, document.getElementById("app3"));
