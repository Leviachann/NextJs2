import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const NewsPage = ({ articles = [] }) => {
  const [news, setNews] = useState(articles);
  const router = useRouter();

  const getSportNews = async () => {
    try {
      const response = await axios.get("http://localhost:4000/news?category=sports");
      setNews(response.data);
      router.push("/news?category=sports", undefined, { shallow: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>News</h1>
      <button onClick={getSportNews}>Show Sport News</button>
      {news.map(({ id, title, description }) => (
        <div key={id}>
          <Link href={`/news/${id}`}>
            <h3>
              {id} - {title}
            </h3>
          </Link>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsPage;

export async function getServerSideProps({ query }) {
  const { category } = query;
  const queryString = category ? `?category=${category}` : "";  
  const response = await axios.get(`http://localhost:4000/news${queryString}`); 

  return {
    props: {
      articles: response.data,
    },
  };
}
