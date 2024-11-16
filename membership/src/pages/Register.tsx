import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { useMembershipState } from "../store/useMembership";
import toast from "react-hot-toast";

const Register = () => {
  const navigation = useNavigate();
  const { setIndividualData } = useMembershipState();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    setIndividualData({
      email: data.email as string,
      name: data.name as string,
      password: data.password as string,
      email_verified: false,
      password_confirmation: data.confirmPassword as string,
    });
    if (Object.values(data).includes("")) {
      return toast.error("please provide all values");
    }
    if (data.password !== data.confirmPassword) {
      return toast.error("password mismatch");
    }
    navigation("/gender");
  };

  return (
    <div className="bg-primary-dark min-h-svh flex flex-col">
      <h4 className="text-center font-bold mt-12 text-primary-light">
        Create account
      </h4>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] rounded-lg p-4 bg-primary-light md:w-[450px] md:mt-8 mt-4 flex flex-col gap-8 self-center"
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
          minLength={8}
          type="password"
          key={"passwordInput"}
          placeholder="********"
          className="placeholder:text-primary-abbey"
        />
        <Input
          label="Confirm password"
          name="confirmPassword"
          type="password"
          key={"confirmPasswordInput"}
          placeholder="confirm your password"
          className="placeholder:text-primary-abbey"
        />
        <Button
          name="Submit"
          handleOnclick={() => handleSubmit}
          type="submit"
          className="text-primary-light"
        />
        <div className="flex  justify-evenly">
          <h6>Already have an account?</h6>
          <Link className="underline font-bold" to={"/login"}>
            sign in
          </Link>
        </div>
        <Link
          to={"/terms"}
          className="font-bold text-center md:mt-4 mt-2 underline-offset-1 underline line-clamp-6 ho"
        >
          Terms and policy
        </Link>
      </form>
    </div>
  );
};

export default Register;
