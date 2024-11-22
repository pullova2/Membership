import { FaArrowRight } from "react-icons/fa6";
import { useMembershipState } from "../store/useMembership";
import { Link } from "react-router-dom";
import { MembershipPlans } from "../store/useMembership";
import IndividualImage from "../assets/images/individual.png";
import CorporateImage from "../assets/images/corporate.png";
import StudentImage from "../assets/images/student.png";

const PlansCard = ({
  accountType,
  name,
  image,
  description,
}: {
  accountType: MembershipPlans;
  name: string;
  image: any;
  description: string;
}) => {
  const { setAccountType } = useMembershipState();
  return (
    <section className=" bg-primary-abbey rounded-lg flex  items-center mt-6">
      <div className=" mr-4  h-full ">
        <img src={image} className="object-cover rounded-full ml-2 md:ml-4" />
      </div>
      <div className="flex flex-col h-full">
        <h5 className="mt-4">{name}</h5>
        <p className="md:max-w-[80%] leading-[150%] w-full">{description}</p>
        <Link
          onClick={() => setAccountType(accountType)}
          className="self-end flex items-center justify-center gap-4 mt-auto bg-primary-dark text-primary-light hover:scale-105 hover:opacity-90 duration-300 mb-4 mr-4 md:py-4 py-2 px-4 md:px-6 rounded-full"
          to={"/registration"}
        >
          select
          <FaArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default PlansCard;
