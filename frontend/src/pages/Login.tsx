import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center bg-base-200">
      <form
        // method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        {/* Your form inputs should go here */}
        <div className="mt-4">
          {
            /* input Email*/
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
          }
        </div>
        <div className="mt-4">
          {
            /*input Password */
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
            />
          }
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onClick={clickMe}
        >
          Login
        </button>

        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-secondary capitalize"
          >
            register
          </Link>
        </p>
      </form>
    </section>
  );
};
function clickMe() {
  swal("Login", "ระบบกำลังเข้าสู่หน้าหลัก", "success");
}
export default Login;
