import { FaArrowRight } from "react-icons/fa6";
import { useMembershipState } from "../store/useMembership";
import { Link } from "react-router-dom";
const MembershipPlan = () => {
  const { setAccountType } = useMembershipState();

  return (
    <section className="h-svh bg-primary-dark text-primary-light grid place-items-center justify-items-center">
      <div className="h-full md:p-24 p-4 ">
        <h3>Choose a membership plan</h3>
        <p className="mt-6">
          telementum fames mattis. Gravida sagittis ut a molestie cursus morbi
          netus nam.
        </p>
        <section className=" bg-primary-abbey rounded-lg flex items-center mt-6">
          <div className="h-1/2 aspect-square">
            <h5>image</h5>
          </div>
          <div className="flex-1 flex flex-col  h-full">
            <h5 className="mt-4">Individual plan</h5>
            <p className="mt-6 md:max-w-[80%] w-full">
              telementum fames mattis. Gravida sagittis ut a molestie cursus
              morbi netus nam.
            </p>
            <Link
              onClick={() => setAccountType("individual")}
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
