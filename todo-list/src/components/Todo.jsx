const Todo = (props) => {
  return (
    <div>
      <label>{props.todo}</label>
      <button onClick={() => props.onClick(props.todo)}>削除</button>
    </div>
  )
}

export default Todo