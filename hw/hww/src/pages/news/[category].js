import React from "react";
import axios from "axios";

const NewsCategory = ({ news = [], category }) => {
  return (
    <div>
      <h1>category - {category}</h1>
      <ul>
        {news.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCategory;

export async function getServerSideProps(context) {
  const { category } = context.params;
  const response = await axios.get(
    `http://localhost:4000/news?category=${category}` 
  );

  return {
    props: {
      news: response.data, 
      category,
    },
  };
}
