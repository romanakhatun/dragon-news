import { CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { PiBookmarkSimple } from "react-icons/pi";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { title, details, thumbnail_url, author, rating, total_view, tags } =
    news;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="card border border-base-300">
      {/* Author & Actions */}
      <div className="bg-base-200 flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-sm text-gray-500">
              {formatDate(author.published_date)}
            </p>
          </div>
        </div>
        <div></div>
        <div className="flex gap-2 text-gray-500">
          <PiBookmarkSimple size={24} className="cursor-pointer" />
          <CiShare2 size={24} className="cursor-pointer" />
        </div>
      </div>

      {/* News Content */}
      <div className="card-body p-5">
        <h2 className="card-title text-lg font-bold">{title}</h2>

        {/* News Image */}
        <figure className="">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-52 object-cover rounded-sm"
          />
        </figure>
        <p className="text-gray-600 text-sm mt-2">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <Link to={``} className="text-[#FF8C47]">
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>

        {/* Tags */}
        <div className="mt-3 text-sm text-gray-500">
          <span className="font-semibold">Tags:</span> {tags.join(", ")}
        </div>

        <div className="border-b border-base-300 my-3"></div>

        {/* Footer */}
        <div className="flex justify-between items-center text-sm text-gray-600">
          <div className="flex items-center gap-2">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} className="text-[#FF8C47]" />
            ))}
            <span className="ml-1">{rating.number.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEye className="text-gray-500" />
            <span>{total_view.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
