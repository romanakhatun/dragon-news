import { format } from "date-fns";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="flex text-center justify-center mt-12">
      <div>
        <img src={logo} alt="Logo" />
        <p className="text-accent mt-5 mb-2">
          Journalism Without Fear or Favour
        </p>
        <p className="text-accent font-medium">
          {format(new Date(), "EEEE, MMMM MM, yyyy")}
        </p>
      </div>
    </div>
  );
};

export default Header;
