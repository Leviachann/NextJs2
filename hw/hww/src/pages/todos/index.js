import React from "react";
import Link from "next/link";
import axios from "axios";

const Todos = ({ todos }) => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`/todos/${todo.id}`}>
              <p>{todo.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;

export async function getServerSideProps() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos");

  return {
    props: {
      todos: response.data,
    },
  };
}
