import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h1 className="font-semibold text-primary text-xl mb-5">All Category</h1>

      <div className="flex flex-col">
        {categories.map((category) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-base-300 py-4 pl-6 font-semibold text-primary"
                : "font-medium text-accent-content py-4 pl-6"
            }
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
