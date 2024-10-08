import React from "react";
import axios from "axios";

const TodoItem = ({ todo }) => {
  return (
    <div>
      <h1>Todo Item Details</h1>
      <h2>Title: {todo.title}</h2>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
    </div>
  );
};

export default TodoItem;

export async function getServerSideProps(context) {
  const { todoItem } = context.params;
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoItem}`);

  return {
    props: {
      todo: response.data,
    },
  };
}
