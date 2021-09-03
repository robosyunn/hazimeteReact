import { useState } from 'react'

const Form = (props) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <>
      <label>
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button onClick={() => props.onClick(inputValue)}>追加</button>
    </>
  )
}

export default Form