import React from "react";

import { createStore } from "redux";
import todoReducer from "../reducers/todoReducer";
import { Provider } from "react-redux";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const store = createStore(todoReducer);

const App = () => (
  <Provider store={store}>
    <div>
      <TodoForm />
      <TodoList />
    </div>
  </Provider>
);

export default App
