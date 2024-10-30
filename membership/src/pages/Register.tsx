import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
  const navigation = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    const data = Object.fromEntries(formData);
    console.log(data);
    navigation("/gender");
  };
  return (
    <div className="bg-primary-dark min-h-svh flex flex-col">
      <h4 className="text-center font-bold mt-12 text-primary-light">
        Create account
      </h4>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] rounded-lg p-4 bg-primary-light md:w-[450px] mt-12 flex flex-col gap-8 self-center"
      >
        <Input
          label="full name"
          name="name"
          type="text"
          key={"fullNameInput"}
          placeholder="please enter your email"
          className="placeholder:text-primary-abbey"
        />
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
          key={"confirmPasswordInput"}
          placeholder="confirm your password"
          className="placeholder:text-primary-abbey"
        />
        <Button
          name="submit"
          handleOnclick={() => handleSubmit}
          type="submit"
          className="text-primary-light"
        />
        <div className="flex mt-4 justify-evenly">
          <h6>Already have an account?</h6>
          <Link className="underline font-bold" to={"/login"}>
            sign in
          </Link>
        </div>
        <h6 className="font-bold text-center mt-4">Terms and policy</h6>
      </form>
    </div>
  );
};

export default Register;
