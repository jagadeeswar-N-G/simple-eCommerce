import React from "react";
import { Link } from "react-router-dom";

function Registation() {
  return (
    <div>
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              class="block border border-black w-full p-3  mb-4 outline-none"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              class="block border border-black w-full p-3  mb-4 outline-none"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              class="block border border-black w-full p-3  mb-4 outline-none"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              class="block border border-black w-full p-3  mb-4 outline-none"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              class="w-full text-center py-3 my-4 text-balck border-2 rounded-none border-black hover:text-white hover:bg-black"
            >
              Create Account
            </button>

            <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div class="text-grey-dark mt-6">
            Already have an account?
            <Link
              to={"/login"}
              class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              log in
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registation;
