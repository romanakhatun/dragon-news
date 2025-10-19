import { Link } from "react-router";

const Login = () => {
  return (
    <div className="place-items-center pb-30">
      <div className="card w-full bg-base-100 max-w-md lg:max-w-lg">
        <div className="py-15 px-10 lg:px-15">
          <h1 className="text-primary text-2xl font-semibold text-center">
            Login your account
          </h1>
          <div className="border-b border-base-300 my-10"></div>

          <form>
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
