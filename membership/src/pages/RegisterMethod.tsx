import { FaArrowRight } from "react-icons/fa6";
import { useMembershipState } from "../store/useMembership";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import MicrosoftLogo from "../assets/images/microsoft.png";
import GoogleSignIn from "../components/GoogleSignIn";

const RegisterMethod = () => {
  const { accountType } = useMembershipState();
  return (
    <section className="bg-primary-dark   h-svh flex flex-col items-center justify-center">
      <div className="w-[90%] rounded-lg p-4   text-primary-light md:w-[450px] mt-12 flex flex-col gap-8 self-center">
        <h4 className="text-center">Proceed with {accountType} email </h4>
        <GoogleSignIn  />
        {/* <button className="bg-primary-light text-primary-dark p-4 rounded-md flex items-center justify-evenly">
          <FcGoogle size={32} />
          continue with google
          <FaArrowRight />
        </button> */}
        <button className="bg-primary-light text-primary-dark p-4 rounded-md flex items-center justify-evenly">
          <img
            src={MicrosoftLogo}
            className="w-[24px] h-[24px]"
            alt="google logo"
          />
          continue with microsoft
          <FaArrowRight />
        </button>
      </div>
      <div className="w-[90%] rounded-lg p-4  md:w-[450px] mt-24 flex flex-col gap-8 self-center">
        <h5 className="text-center text-primary-light">Or create an account</h5>
        <Link
          to={"/register"}
          className="bg-primary-light text-primary-dark p-4 rounded-md flex items-center justify-evenly"
        >
          continue to create account
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default RegisterMethod;
