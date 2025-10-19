import React, { use } from "react";
const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const category = use(categoryPromise);
  console.log(category);

  return (
    <div>
      <h1 className="font-semibold text-primary text-xl">All Category</h1>
    </div>
  );
};

export default Categories;
