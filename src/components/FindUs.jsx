import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const FindUs = () => {
  const socials = [
    {
      id: 1,
      name: "Facebook",
      icon: <FaFacebookF className="text-[#1877F2]" />,
      link: "https://facebook.com",
    },
    {
      id: 2,
      name: "Twitter",
      icon: <FaTwitter className="text-[#1DA1F2]" />,
      link: "https://twitter.com",
    },
    {
      id: 3,
      name: "Instagram",
      icon: <FaInstagram className="text-[#E1306C]" />,
      link: "https://instagram.com",
    },
  ];

  return (
    <div className="bg-white">
      <h1 className="font-semibold text-primary text-xl mb-5">Find Us On</h1>

      <div className="divide-y divide-base-300 border border-base-300 rounded-md">
        {socials.map((social) => (
          <Link
            key={social.id}
            to={social.link}
            className="flex items-center gap-3 p-3 text-accent"
          >
            <div className="p-2 bg-gray-100 rounded-full">{social.icon}</div>
            <span className="font-medium">{social.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FindUs;
