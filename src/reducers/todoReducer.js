const initialState = {
    todos: []
  };
  
  let todoId = 0;
  
  const todoTypes = {
    TODO_ADD: "TODO_ADD",
    TODO_TOGGLE: "TODO_TOGGLE"
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case todoTypes.TODO_ADD: {
        todoId++;
        return {
          todos: [
            ...state.todos,
            {
              id: todoId,
              title: action.payload,
              complete: false
            }
          ]
        };
      }
      case "TODO_TOGGLE":
        return {
          todos: state.todos.map(
            t => (t.id === action.payload ? { ...t, complete: !t.complete } : t)
          )
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;