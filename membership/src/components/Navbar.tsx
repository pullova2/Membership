import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/Frame.svg";
import LogoName from "../assets/images/LogoName.svg";
import Button from "./Button";
const Navbar = () => {
  const navigation = useNavigate();
  const handleLogin = () => {
    navigation("/login");
  };
  return (
    <nav className="bg-primary-dark md:px-48 p-6 h-[10vh] flex justify-between ">
      <img src={Logo} width={100} height={100} alt="logo" />
      <img
        src={LogoName}
        width={200}
        height={200}
        alt="logo"
        className="md:inline-block hidden"
      />
      <Button
        name="Login"
        type="button"
        handleOnclick={handleLogin}
        className="flex md:basis-[200px] basis-[100px] border border-primary-light text-primary-light items-center justify-center rounded-md"
      />
    </nav>
  );
};

export default Navbar;
