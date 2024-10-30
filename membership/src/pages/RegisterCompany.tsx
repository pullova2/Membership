import Input from "../components/Input";

const RegisterCompany = () => {
  return (
    <div className="bg-primary-dark  h-svh flex flex-col">
      <h4 className="text-center font-bold mt-12 text-primary-light">
        Register company
      </h4>
      <form
        action=""
        className="w-[90%] rounded-lg p-4 bg-primary-light md:w-[450px] mt-12 flex flex-col gap-8 self-center"
      >
        <Input
          label="company name"
          name="company name"
          type="text"
          key={"fullNameInput"}
          placeholder="your company name"
          className="placeholder:text-primary-abbey"
        />
        <Input
          label="email"
          name="email"
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
          label="Your contact"
          name="contact"
          type="text"
          key={"confirmPasswordInput"}
          placeholder="person registering contact"
          className="placeholder:text-primary-abbey"
        />
        <Input
          label="your email (official)"
          name="registerPersonEmail"
          type="email"
          key={"confirmPasswordInput"}
          placeholder="person registering email"
          className="placeholder:text-primary-abbey"
        />
        <Input name="Register" type="button" className="text-primary-light" />
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
