import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const handleSuccess = (information: any) => {
    const { credential } = information;
    const data = jwtDecode(credential);
    console.log(data);
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    if (data) {
      console.log("data:", data);
      return;
    }
    console.log("something went wrong...");
    return;
  };
  const handleError = () => {
    console.log("something went wrong there is an error...");
  };
  return (
    <GoogleLogin
      size="large"
      shape="rectangular"
      auto_select={false}
      type="standard"
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
};

export default GoogleSignIn;
// {/* <Button
//         name="See services"
//         type="button"
//         className="bg-primary-light text-primary-dark md:w-1/3 w-full mb-8 flex items-center justify-center gap-4 hover:opacity-95"
//       >
//         <FaArrowRight />
//       </Button> */}
