import { use } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router";

const SocialInfo = () => {
  const { signInGoogleUser, signInGithubUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignInGoogle = () => {
    signInGoogleUser()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSignInGithub = () => {
    signInGithubUser()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/auth/login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h1 className="font-semibold text-primary text-xl mb-5">Login With</h1>
      <div className="space-y-3">
        <button
          onClick={handleSignInGoogle}
          className="btn btn-outline w-full btn-neutral"
        >
          <FaGoogle size={20} />
          Login with Google
        </button>
        <button
          onClick={handleSignInGithub}
          className="btn btn-outline w-full btn-primary"
        >
          <FaGithub size={20} />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialInfo;
