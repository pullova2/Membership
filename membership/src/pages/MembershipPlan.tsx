import { MembershipPlans } from "../store/useMembership";
import IndividualImage from "../assets/images/individual.png";
import CorporateImage from "../assets/images/corporate.png";
import StudentImage from "../assets/images/student.png";
import { PlansCard } from "../components";

const MembershipPlan = () => {
  return (
    <section className="md:min-h-svh min-h-svh overscroll-none bg-primary-dark text-primary-light grid place-items-center justify-items-center">
      <div className="h-full md:px-24 md:py-8 p-4 ">
        <h3>Choose a membership plan</h3>
        <p className="mt-6">
          telementum fames mattis. Gravida sagittis ut a molestie cursus morbi
          netus nam.
        </p>
        <PlansCard
          name="Corporate plan"
          accountType={MembershipPlans.corporate}
          description="telementum fames mattis. Gravida sagittis ut a molestie cursus
              morbi netus nam"
          image={CorporateImage}
          key={"Corporate card"}
        />
        <PlansCard
          name="Individual plan"
          accountType={MembershipPlans.Individual}
          description="telementum fames mattis. Gravida sagittis ut a molestie cursus
              morbi netus nam"
          image={IndividualImage}
          key={"individual card"}
        />
        <PlansCard
          name="Student plan"
          accountType={MembershipPlans.Student}
          description="telementum fames mattis. Gravida sagittis ut a molestie cursus
              morbi netus nam"
          image={StudentImage}
          key={"student card"}
        />
      </div>
    </section>
  );
};

export default MembershipPlan;
