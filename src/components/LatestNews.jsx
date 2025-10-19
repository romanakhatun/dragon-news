import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-5 bg-base-200 p-4">
      <p className="bg-secondary text-white py-[9px] px-6 text-xl font-medium">
        Latest
      </p>
      <Marquee
        className="flex gap-5 text-primary font-semibold text-lg"
        pauseOnHover={true}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          repellat?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          repellat?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          repellat?
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
