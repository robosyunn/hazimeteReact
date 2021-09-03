import { useState } from 'react'
import Form from './components/Form'
import Todo from './components/Todo'

const App = () => {
  // todo = ["買い物する", "洗濯する", ...]
  const [todos, setTodos] = useState([])

  const addTodo = (value) => {
    setTodos(todos.concat([value]))
  }

  const deleteTodo = (value) => {
    setTodos(todos.filter(todo => todo !== value))
  }
  // [<Todo todo={"洗濯する"}, onClick={deleteTodo} /> , <Todo todo={"買い物"}, onClick={deleteTodo} />...]
  return (
    <div className="App">
      <Form
        onClick={addTodo}
      />
      {todos.map(todo => <Todo todo={todo} onClick={deleteTodo} />)}
    </div>
  );
}

export default App;



//
