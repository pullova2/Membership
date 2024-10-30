import { FaArrowRight } from "react-icons/fa6";
import Input from "../components/Input";

const MembershipPreferences = () => {
  return (
    <section className="bg-primary-dark flex flex-col items-center justify-evenly min-h-svh">
      <h4 className="text-primary-light font-bold">Membership preferences</h4>
      <form className="xl:w-[500px] p-4 h-[500px] flex flex-col justify-between md:w-[500px] sm:w-[70%] w-[90%]">
        <Input
          name=""
          type="select"
          label="Select a membership category"
          labelStyles="text-primary-light"
          data={[{ name: "select a membership category" }]}
        />
        <Input
          name=""
          type="select"
          label="Billing information"
          labelStyles="text-primary-light"
          data={[{ name: "eg monthly, yearly" }]}
        />
        <Input
          name=""
          type="date"
          label="When do you want to start the membership?"
          labelStyles="text-primary-light"
          placeholder="Enter date to start"
        />
        <Input
          name=""
          type="date"
          labelStyles="text-primary-light"
          label="When do you want your billing cycle"
          placeholder="Enter date to start"
        />
        <Input
          name="set preferences"
          type="button"
          className="text-primary-dark gap-4 bg-primary-light flex items-center justify-center hover:opacity-95 duration-300"
        >
          <FaArrowRight />
        </Input>
      </form>
    </section>
  );
};

export default MembershipPreferences;
