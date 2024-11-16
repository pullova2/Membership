import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useMembershipState } from "../store/useMembership";
import toast from "react-hot-toast";
const Usage = () => {
  const [selectedId, selectId] = useState<number>();

  const navigation = useNavigate();

  const { setIndividualData } = useMembershipState();

  const handleSubmit = () => {
    if (!selectedId) {
      toast.error("please choose an option to proceed");
      return;
    }
    if (selectedId === 1) {
      setIndividualData({ member: false, ride_only: true });
      navigation("/payment");
      return;
    }
    if (selectedId === 2) {
      setIndividualData({ member: true, ride_only: false });
      navigation("/payment");
      return;
    }
  };

  const usage = [
    {
      id: 1,
      name: "Rides only",
      description:
        "Lorem ipsum dolor sit amet consectetur. Non dictum diam id quam proin faucibus. Egestas et sit ",
    },
    {
      id: 2,
      name: "Become a member",
      description:
        "Lorem ipsum dolor sit amet consectetur. Non dictum diam id quam proin faucibus. Egestas et sit  ",
    },
  ];
  return (
    <section className="bg-primary-dark h-svh items-center justify-center flex flex-col">
      <div className="w-[90%] md:w-[40%] rounded-md flex flex-col bg-primary-light p-8 text-primary-dark">
        <h4 className="mb-6 font-bold">
          How would you want to use your membership
        </h4>
        <h6>select one to continue</h6>
        <section className="flex flex-col gap-6 mt-6">
          {usage.map(({ description, id, name }, _) => {
            return (
              <div
                key={id}
                onClick={() => selectId(id)}
                className={`p-8 cursor-pointer bg-primary-dark rounded-md flex flex-col items-start border text-primary-light ${
                  selectedId === id
                    ? "  border  border-slate-100 scale-105 ease-linear duration-300"
                    : ""
                }`}
              >
                <h5 className="mb-6">{name}</h5>
                <p>{description}</p>
              </div>
            );
          })}
        </section>
        <Button
          name="submit"
          type="button"
          className="w-1/3 mt-6 self-end hover:opacity-90 duration-300 ease-in-out text-primary-light"
          handleOnclick={() => handleSubmit()}
        />
      </div>
    </section>
  );
};

export default Usage;
