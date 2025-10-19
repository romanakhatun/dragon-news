import { useLoaderData, useParams } from "react-router";
import Header from "../components/Header";
import RightAside from "../components/homeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useEffect, useState } from "react";

const NewsDetails = () => {
  const [news, setNews] = useState({});
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);
  console.log(news);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="max-w-11/12 mx-auto px-5 my-10 grid grid-cols-12 gap-6">
        <section className="main col-span-9">
          <h2 className="font-semibold text-primary text-xl mb-5">
            Dragon News
          </h2>
          <NewsDetailsCard news={news} />
        </section>
        <aside className="col-span-3 sticky h-fit top-0">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
