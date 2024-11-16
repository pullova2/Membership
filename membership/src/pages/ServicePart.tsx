import { FaCheck } from "react-icons/fa6";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const ServicePart = () => {
  const navigation = useNavigate();
  const handleProceed = () => {
    navigation("/company/about");
  };
  const serviceSectionDummyData = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. . ",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. . ",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. . ",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. . ",
    },
  ];
  return (
    <section className="flex flex-col bg-primary-dark  min-h-svh justify-center items-center p-4">
      <div className=" flex flex-col p-8 bg-secondary-gallery h-[60vh] rounded-md items-center justify-around">
        <h3 className="mb-16 md:w-[90%] w-full text-center">
          Welcome to the service section
        </h3>
        <section className="flex-1 gap-6 flex justify-around flex-col">
          {serviceSectionDummyData.map((item) => {
            return (
              <p className="flex justify-evenly items-center gap-4 leading-[150%]">
                <FaCheck />
                {item.description}
              </p>
            );
          })}
        </section>
        <Button
          handleOnclick={() => handleProceed()}
          className="text-primary-dark bg-primary-light w-2/3 mt-12 md:w-1/3 self-end p-2 md:p-4"
          name="Proceed"
          type="button"
        />
      </div>
    </section>
  );
};

export default ServicePart;
