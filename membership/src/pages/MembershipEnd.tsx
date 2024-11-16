import { FaArrowRight } from "react-icons/fa6";
import Button from "../components/Button";
// @ts-ignore
import ConfirmationSvg from "../assets/images/amico.svg";
import { MembershipPlans, useMembershipState } from "../store/useMembership";
import { Link } from "react-router-dom";

const MembershipServices = [
  {
    service: "Business rides",
    image: "",
  },
  {
    service: "Food delivery",
    image: "",
  },
  {
    service: "Home beauty",
    image: "",
  },
  {
    service: "Our market place",
    image: "",
  },
];

const MembershipEnd = () => {
  const { accountType } = useMembershipState();
  return (
    <section className="min-h-screen grid md:grid-cols-2 grid-cols-1 place-content-center place-items-center md:p-48 p-12 bg-primary-dark">
      <div className="flex md:gap-12 gap-6 flex-col text-primary-light">
        <h2 className="mb-8 font-bold">
          Congratulations you have successfully registered for membership
        </h2>
        <p className="mb-8 md:max-w-[80%] w-full leading-[150%]">
          Lorem ipsum dolor sit amet consectetur. Odio natoque enim sodales in
          convallis sed laoreet volutpat. Cursus venenatis ipsum ac tempor elit.
          In turpis fringilla eu id mauris vitae turpis eget. Et quis orci
          integer donec odio sem placerat aliquet.
        </p>
        {accountType === MembershipPlans.corporate && (
          <Button
            name="Proceed to service section"
            type="button"
            className="bg-primary-light text-primary-dark md:w-1/3 w-full mb-8 flex items-center justify-center gap-4 hover:opacity-95"
          >
            <FaArrowRight />
          </Button>
        )}
      </div>
      <div className="text-primary-light flex flex-col gap-4 items-center">
        <img className="animate-pulse  ease-linear" src={ConfirmationSvg} />
        <h5 className="font-bold text-center">
          Please wait while we review your application
        </h5>
        <p>We will get back to you in 24 hours</p>
      </div>
      <Link to={"/homebeauty"} className="text-blue-500 underline mt-6">
        haha see home beauty
      </Link>
      {/* <Button
        name="See services"
        type="button"
        className="bg-primary-light text-primary-dark md:w-1/3 w-full mb-8 flex items-center justify-center gap-4 hover:opacity-95"
      >
        <FaArrowRight />
      </Button> */}
    </section>
  );
};

export default MembershipEnd;
