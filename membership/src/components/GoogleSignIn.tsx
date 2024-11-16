import { useGoogleLogin, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { FaArrowRight } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { MembershipPlans, useMembershipState } from "../store/useMembership";

const GoogleSignIn = () => {
  const navigate = useNavigate();
  const { setIndividualData, accountType } = useMembershipState();

  const handleSuccess = async (information: any) => {
    try {
      console.log(information);
      const {
        data: { name, email, picture, verified_email },
      } = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${information.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${information.access_token}`,
            Accept: "application/json",
          },
        }
      );
      setIndividualData({
        name,
        email,
        email_verified: verified_email,
      });
      toast.success(`Authenticated as ${name}`);
      if (accountType === MembershipPlans.corporate) {
        navigate("/company/information");
        return;
      }
      navigate("/gender");
    } catch (error) {
      console.log("haha");
      console.log(error);
    }
    // const data = await jwtDecode(information.credential);
    // console.log(data);
  };

  const handleError = () => {
    console.log("something went wrong there is an error...");
  };

  const login = useGoogleLogin({
    onSuccess: handleSuccess,
    onError: handleError,
    flow: "implicit",
  });

  return (
    // <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    <button
      onClick={() => login()}
      className="bg-primary-light text-primary-dark p-4 rounded-md flex items-center justify-evenly"
    >
      <FcGoogle size={32} />
      continue with Google
      <FaArrowRight />
    </button>
  );
};

export default GoogleSignIn;
