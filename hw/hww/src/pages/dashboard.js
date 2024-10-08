import React from "react";
import { useEffect, useState } from "react/cjs/react.production.min";
import useSWR from "swr";

const fetcher= async ()=>{
    const response= await axios.get("http://localhost:4000/dashboard");
    return response.data;
}

const DashboardPage = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [data, setData] = useState({
//     likes: 0,
//     followers: 0,
//     following: 0,
//     posts: 0,
//   });
// const { likes, followers, following, posts } = data;
const {data, isLoading, error}= useSWR('dashboard', fetcher);
//   useEffect(() => {
//     async function getData() {
//         try{
//             const response = await axios.get("http://localhost:4000/dashboard");
//             setData(response.data);
//         } catch(error){
//             setError(error.message);
//         }
//     }
//     getData();
//   }, []);
  if(error) return "Error Happened";
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {error && <h1>Error Happened {error}</h1>}
      <h1>Dahboard</h1>
      <h2>Likes {data?.likes}</h2>
      <h2>Followers {data?.followers}</h2>
      <h2>Following {data?.following}</h2>
      <h2>Posts {data?.posts}</h2>
    </div>
  );
};

export default DashboardPage;
