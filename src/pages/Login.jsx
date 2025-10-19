import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { signInUser } = use(AuthContext);
  const [error, setError] = useState("");
  // const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        // event.target.reset();
        navigate(location.state || "/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="place-items-center pb-30">
      <div className="card w-full bg-base-100 max-w-md lg:max-w-lg">
        <div className="py-15 px-10 lg:px-15">
          <h1 className="text-primary text-2xl font-semibold text-center">
            Login your account
          </h1>
          <div className="border-b border-base-300 my-10"></div>

          <form onSubmit={handleSignIn}>
            <fieldset className="fieldset space-y-5">
              <div className="space-y-3">
                <label className="label text-primary font-semibold text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="input w-full bg-base-200 border-0 shadow-none focus:outline-0 py-6 px-4"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="space-y-3">
                <label className="label text-primary font-semibold text-sm">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="input w-full bg-base-200 border-0 shadow-none focus:outline-0 py-6 px-4"
                  placeholder="Enter your password"
                />
              </div>
              <button className="btn btn-primary">Login</button>
            </fieldset>

            {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

            <div>
              <p className="text-center text-accent mt-4 font-semibold">
                Dont’t Have An Account ?{" "}
                <Link className="text-[#F75B5F]" to="/auth/register">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
