import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="bg-primary-dark  h-svh flex flex-col">
      <h4 className="text-center font-bold mt-12 text-primary-light">
        login into your account
      </h4>
      <form
        action=""
        className="w-[90%] rounded-lg p-4 bg-primary-light md:w-[450px] mt-12 flex flex-col gap-8 self-center"
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
        <Input
          label="Confirm password"
          name="confirmpassword"
          type="password"
          key={"emailInput"}
          placeholder="confirm your password"
          className="placeholder:text-primary-abbey"
        />
        <Button name="submit" type="button" className="text-primary-light" />
        <div className="flex mt-4 justify-evenly">
          <h6>Don't have an account?</h6>
          <Link className="underline font-bold" to={"/register"}>
            sign up
          </Link>
        </div>
        <h6 className="font-bold text-center mt-4">Terms and policy</h6>
      </form>
    </div>
  );
};

export default Login;
