import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { FormEvent } from "react";
import toast from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleSignIn } from "../components";

const Login = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("login data:>>", data);

    if (Object.values(data).includes("")) {
      toast.error("Please fill all fields");
    }
  };
  return (
    <div className="bg-primary-dark  min-h-svh flex flex-col">
      <h4 className="text-center font-bold mt-12 text-primary-light">
        login into your account
      </h4>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] rounded-lg px-4 py-8 bg-primary-light md:w-[450px] mt-12 flex flex-col gap-8 self-center"
      >
        <Input
          label="email"
          name="email"
          type="email"
          key={"emailInput"}
          placeholder="please enter your email"
          className="placeholder:text-primary-abbey"
        />
        <Input
          label="password"
          name="password"
          type="password"
          key={"passwordInput"}
          placeholder="********"
          className="placeholder:text-primary-abbey"
        />
        <Button name="submit" type="button" className="text-primary-light" />
        <GoogleSignIn />
        <div className="flex md:mt-4 mt-2 justify-evenly">
          <h6>Don't have an account?</h6>
          <Link className="underline font-bold" to={"/register"}>
            sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
