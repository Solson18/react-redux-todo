import React from "react";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch({ type: "TODO_ADD", payload: text })
});

const TodoForm = props => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value) return;
          props.addTodo(input.value);
          input.value = "";
          input.focus();
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(TodoForm);
