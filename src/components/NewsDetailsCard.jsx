import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { title, details, image_url, category_id } = news;
  return (
    <div>
      <div className="rounded border border-base-300 p-5">
        {/* News Image */}
        <figure className="">
          <img
            src={image_url}
            alt={title}
            className="w-full h-[350px] object-cover rounded-sm"
          />
        </figure>
        <h2 className="text-primary card-title text-lg font-bold mt-5 mb-2">
          {title}
        </h2>
        <p className="text-gray-600 text-sm mb-8">{details}</p>
        <Link
          to={`/category/${category_id}`}
          className="btn btn-secondary border-0 shadow-none rounded-none"
        >
          <IoIosArrowRoundBack size={24} />
          All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
