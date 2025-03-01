import React, { useContext, useState } from 'react'
import { GlobalContext } from './context/GlobalContext'

const Form = () => {

  const [input, setInput] = useState('')


  const {todos, idCounter, colorIndex, addTodo} = useContext(GlobalContext)

  const getRandomColor = () => {
    const random_colors = ['rgb(224, 242, 233)', 'rgb(206, 181, 167)', 'rgb(161, 124, 107)', 'rgb(91, 123, 122)', 'rgb(60, 136, 126)']

    let color_counter = colorIndex

    if (color_counter > random_colors.length -1) color_counter = 0

    return {
      color: random_colors[color_counter++],
      index: color_counter
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!input) return



    let todo_id = idCounter

    todo_id++

    const {color, index} = getRandomColor()

    addTodo(input, todo_id, color, index)
    setInput('')
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input maxLength='200' type="text" autoComplete='off' name='input' value={input} onChange={handleChange}/>
      <button type='submit'>Add</button>
    </form>
  )
}

export default Form
