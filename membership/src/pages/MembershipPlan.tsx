import { FaArrowRight } from "react-icons/fa6";
import { useMembershipState } from "../store/useMembership";
import { Link } from "react-router-dom";
import { MembershipPlans } from "../store/useMembership";
import IndividualImage from "../assets/images/individual.png";
import CorporateImage from "../assets/images/corporate.png";
import StudentImage from "../assets/images/student.png";

const MembershipPlan = () => {
  const { setAccountType } = useMembershipState();
  return (
    <section className="md:min-h-svh min-h-svh overscroll-none bg-primary-dark text-primary-light grid place-items-center justify-items-center">
      <div className="h-full md:p-24 p-4 ">
        <h3>Choose a membership plan</h3>
        <p className="mt-6">
          telementum fames mattis. Gravida sagittis ut a molestie cursus morbi
          netus nam.
        </p>
        <section className=" bg-primary-abbey rounded-lg flex  items-center mt-6">
          <div className=" mr-4  h-full bg-green-100 ">
            <img
              src={IndividualImage}
              className="object-cove rounded-full ml-2 md:ml-4"
            />
          </div>
          <div className="flex flex-col h-full">
            <h5 className="mt-4">Individual plan</h5>
            <p className="mt-4 md:max-w-[80%] w-full">
              telementum fames mattis. Gravida sagittis ut a molestie cursus
              morbi netus nam.
            </p>
            <Link
              onClick={() => setAccountType(MembershipPlans.Individual)}
              className="self-end flex items-center justify-center gap-4 mt-auto bg-primary-dark text-primary-light hover:scale-105 hover:opacity-90 duration-300 mb-4 mr-4 md:py-4 py-2 px-4 md:px-6 rounded-full"
              to={"/registration"}
            >
              select
              <FaArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className=" bg-primary-abbey rounded-lg flex items-center mt-6">
          <div className="mr-4 w-[30%]  h-full">
            <img src={CorporateImage} className="" />
          </div>
          <div className="flex-1 flex flex-col  h-full">
            <h5 className="mt-4">Corporate plan</h5>
            <p className="mt-4 md:max-w-[80%] w-full">
              telementum fames mattis. Gravida sagittis ut a molestie cursus
              morbi netus nam.
            </p>
            <Link
              onClick={() => setAccountType(MembershipPlans.corporate)}
              className="self-end flex items-center justify-center gap-4 mt-4 bg-primary-dark text-primary-light hover:scale-105 hover:opacity-90 duration-300 mb-4  mr-4 md:py-4 py-2 px-4 md:px-6 rounded-full"
              to={"/registration"}
            >
              select
              <FaArrowRight size={16} />
            </Link>
          </div>
        </section>
        <section className=" bg-primary-abbey rounded-lg flex items-center mt-6">
          <div className="mr-4 w-[30%]  h-full">
            <img src={StudentImage} className="" />
          </div>
          <div className="flex-1 flex flex-col  h-full">
            <h5 className="mt-4">Student plan</h5>
            <p className="mt-4 md:max-w-[80%] w-full">
              telementum fames mattis. Gravida sagittis ut a molestie cursus
              morbi netus nam.
            </p>
            <Link
              onClick={() => setAccountType(MembershipPlans.Student)}
              className="self-end flex items-center justify-center gap-4 mt-auto bg-primary-dark text-primary-light hover:scale-105 hover:opacity-90 duration-300 mb-4 mr-4 md:py-4 py-2 px-4 md:px-6 rounded-full"
              to={"/registration"}
            >
              select
              <FaArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default MembershipPlan;
