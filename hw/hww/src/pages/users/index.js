import axios from "axios";
import Link from "next/link";

const Users = ({ users }) => {
  console.log("client side");
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            <li>
              <h3>{user.name}</h3>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  console.log("server side");
  const response = await axios.get("http://localhost:4000/users/");
  console.log("response => ", response);

  return {
    props: {
      users: response.data,
    },
  };
}
