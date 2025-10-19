import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const { id } = useParams();

  const data = useLoaderData();
  console.log(id);

  useEffect(() => {
    if (id === "0") {
      // Show All News
      setCategoryNews(data);
      return;
    }

    if (id === "1") {
      // Today Breaking News
      const filterNews = data.filter(
        (news) => news.others?.is_today_pick === true
      );
      setCategoryNews(filterNews);
      return;
    }

    // Filter by category ID
    const filterNews = data.filter(
      (news) => String(news.category_id) === String(id)
    );
    setCategoryNews(filterNews);
  }, [data, id]);

  console.log(categoryNews);

  return (
    <div className="grid grid-cols-1 gap-7">
      {categoryNews.map((news) => (
        <NewsCard news={news} key={news.id} />
      ))}
    </div>
  );
};

export default CategoryNews;
