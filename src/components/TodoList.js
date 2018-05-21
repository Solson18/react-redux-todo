import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch({ type: "TODO_TOGGLE", payload: id })
});

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(t => (
        <li
          key={t.id}
          onClick={() => props.toggleTodo(t.id)}
          style={{ textDecoration: t.complete ? "line-through" : "none" }}
        >
          {t.id}: {t.title} : {t.complete ? "yes" : "no"}
        </li>
      ))}
    </ul>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);