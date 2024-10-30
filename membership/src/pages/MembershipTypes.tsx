import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useGetMemberShipTypes } from "../hooks/membership";

const MembershipTypes = () => {
  const { data, error, isError, isLoading } = useGetMemberShipTypes();
  const naviagtion = useNavigate();

  const handleNavigate = () => {
    naviagtion("/usage");
  };

  const cards = [
    {
      name: "silver",
      price: "price",
      benefits: [
        {
          name: "sapien leo tortor sagittis. Sit pulvinar in lacus neque port",
        },
      ],
    },
    {
      name: "name",
      price: "price",
      benefits: [
        {
          name: "sapien leo tortor sagittis. Sit pulvinar in lacus neque port",
        },
      ],
    },
    {
      name: "name",
      price: "price",
      benefits: [
        {
          name: "sapien leo tortor sagittis. Sit pulvinar in lacus neque port",
        },
      ],
    },
    {
      name: "name",
      price: "price",
      benefits: [
        {
          name: "sapien leo tortor sagittis. Sit pulvinar in lacus neque port",
        },
      ],
    },
  ];
  return isError ? (
    <div className="min-h-screen bg-primary-dark text-primary-light items-center justify-center">
      <h4>
        Something went Wrong, Our team is working hard to get this service
        available
      </h4>
    </div>
  ) : isLoading ? (
    <section className="bg-primary-dark animate-pulse items-center justify-center text-primary-light md:h-svh h-auto flex flex-col ">
      loading...
    </section>
  ) : (
    <section className="bg-primary-dark  text-primary-light md:h-svh h-auto flex flex-col ">
      <div className="md:w-2/3 w-full p-4 flex flex-col md:h-[80%] self-center mt-16">
        <h4 className="mb-6 font-bold">Select a membership </h4>
        <p className="mb-6 font-bold">
          netus sapien leo tortor sagittis. Sit pulvinar in lacus neque porta
        </p>
        <section className="flex-1 gap-4 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 lg:grid-cols-3 items-center">
          {cards.map(({ benefits, name, price }) => {
            return (
              <div
                className={`md:h-[80%] h-[600px] rounded-lg flex flex-col justify-around ${
                  name === "silver" ? "bg-green-300" : "bg-red-300"
                }  p-2`}
              >
                <section className="flex justify-between ">
                  <h5>{name}</h5>
                  <p>
                    {"ksh"} {price}
                  </p>
                </section>
                <section>
                  {benefits.map(({ name }) => {
                    return <p>{name}</p>;
                  })}
                </section>
                <Button
                  handleOnclick={() => handleNavigate()}
                  name="Proceed"
                  className={`capitalize `}
                  type="button"
                ></Button>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default MembershipTypes;
