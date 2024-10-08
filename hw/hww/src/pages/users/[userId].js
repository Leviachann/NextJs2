import React from "react";
import axios from "axios";
const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserDetails;

export async function getStaticPaths() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  const users = response.data;

  const paths = users.map((user) => ({
    params: { userId: user.id.toString() },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const user = response.data;

  return {
    props: {
      user,
    },
  };
}
