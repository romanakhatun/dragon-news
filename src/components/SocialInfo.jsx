import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialInfo = () => {
  return (
    <div>
      <h1 className="font-semibold text-primary text-xl mb-5">Login With</h1>
      <div className="space-y-3">
        <button className="btn btn-outline w-full btn-neutral">
          <FaGoogle size={20} />
          Login with Google
        </button>
        <button className="btn btn-outline w-full btn-primary">
          <FaGithub size={20} />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialInfo;
