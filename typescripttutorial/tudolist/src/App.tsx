import { stringify } from 'querystring';
import React from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo ={
    inputValue: string;
    id: number;
    checked: boolean;
  };

  return (
    <div className="App">
    <div>
      <h2>Todoリスト with Typescript</h2>
      <form onSubmit={ () => {}}>
        <input type='text' onChange={() => {}} className="inputText" />
        <input type="submit" value="作成" className="submitButton" />
      </form>
    </div>
    </div>
  );
}

export default App;
