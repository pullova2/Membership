import { FormEvent } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useMembershipState } from "../store/useMembership";

const RegisterCompany = () => {
  const navigation = useNavigate();
  const { setCompanyData } = useMembershipState();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);

    // if (Object.values(data).includes("")) {
    //   toast.error("please provide all fields");
    //   return;
    // }
    setCompanyData({
      company_email: data.companyEmail,
      password: data.password,
      password_confirmation: data.confirmPassword,
      name: data.name,
      contact_name: data.registerPersonEmail,
    });
    // navigation("information");
  };

  return (
    <div className="bg-primary-dark mb-4 min-h-svh flex flex-col">
      <h4 className="text-center font-bold mt-12 text-primary-light">
        Register company
      </h4>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] h-2/3 overflow-y-scroll rounded-lg p-4 bg-primary-light md:w-[450px] mt-12 flex flex-col gap-8 self-center"
      >
        <Input
          label="company name"
          name="companyName"
          type="text"
          key={"fullNameInput"}
          placeholder="your company name"
          className="placeholder:text-primary-abbey"
        />
        <Input
          label="company email"
          name="companyEmail"
          type="email"
          key={"emailInput"}
          placeholder="your company email"
          className="placeholder:text-primary-abbey"
        />
        <Input
          label="Your name"
          name="name"
          type="text"
          key={"passwordInput"}
          placeholder="person registering name"
          className="placeholder:text-primary-abbey"
        />
        <Input
          label="Password"
          name="password"
          type="password"
          key={"confirmPasswordInput"}
          placeholder="password"
          className="placeholder:text-primary-abbey"
        />
        <Input
          label="confirm password"
          name="confirmPassword"
          type="password"
          key={"confirmPasswordInput"}
          placeholder="person registering contact"
          className="placeholder:text-primary-abbey"
        />
        <Input
          label="Your contact"
          name="contact"
          type="tel"
          key={"confirmPasswordInput"}
          placeholder="person registering contact"
          className="placeholder:text-primary-abbey"
        />
        <Input
          label="your email (official)"
          name="registerPersonEmail"
          type="email"
          key={"officialRegisterEmail"}
          placeholder="person registering email"
          className="placeholder:text-primary-abbey"
        />
        <Button name="Register" type="button" className="text-primary-light" />
        {/* <div className="flex mt-4 justify-evenly">
          <h6>Already have an account?</h6>
          <Link className="underline font-bold" to={"/login"}>
            sign in
          </Link>
        </div>
        <h6 className="font-bold text-center mt-4">Terms and policy</h6> */}
      </form>
    </div>
  );
};

export default RegisterCompany;
