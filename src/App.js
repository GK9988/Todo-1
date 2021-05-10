import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import Todo from './Todo';


function App() {

  const [todos, setTodos] = useState(['Do integration', 'Do Organic Chemistry', 'Do Ray Optics']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input])
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello World</h1>

      <form action="">

        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value = {input} onChange = {event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled = {!input} type = 'submit' variant="contained" color="primary" onClick = {addTodo}>Add Todo</Button>

      </form>
      <ul>
        {todos.map(todo => (
          <Todo text = {todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;