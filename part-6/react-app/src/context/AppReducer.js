export default (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        color_index: action.payload.colorIndex,
        id_counter: action.payload.id,
        todos: [action.payload, ...state.todos]
      }
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case 'UPDATE_TODO':
      const updatedTodos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        ...state,
        todos: updatedTodos
      }
    case 'EDIT_TODO':
      const editedTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            todo: action.payload.input
          }
        }
        return todo
      })
      return {
        ...state,
        todos: editedTodos
      }
    default:
      return state
  }
}