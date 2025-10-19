import { Link } from "react-router";

const Register = () => {
  return (
    <div className="place-items-center pb-30">
      <div className="card w-full bg-base-100 max-w-md lg:max-w-lg">
        <div className="py-15 px-10 lg:px-15">
          <h1 className="text-primary text-2xl font-semibold text-center">
            Register your account
          </h1>
          <div className="border-b border-base-300 my-10"></div>

          <form>
            <fieldset className="fieldset space-y-5">
              <div className="space-y-3">
                <label className="label text-primary font-semibold text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="input w-full bg-base-200 border-0 shadow-none focus:outline-0 py-6 px-4"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-3">
                <label className="label text-primary font-semibold text-sm">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  className="input w-full bg-base-200 border-0 shadow-none focus:outline-0 py-6 px-4"
                  placeholder="Enter your Photo URL"
                />
              </div>
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
              <div>
                <label className="label">
                  <input
                    type="checkbox"
                    name="terms"
                    className="checkbox checkbox-sm rounded"
                  />
                  Accept our Terms & Condition
                </label>
              </div>
              <button className="btn btn-primary">Register</button>
            </fieldset>
            <div>
              <p className="text-center text-accent mt-4 font-semibold">
                Have An Account ?{" "}
                <Link className="text-[#F75B5F]" to="/auth/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
