import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

const Payments = () => {
  const navigation = useNavigate();
  const handleNext = () => {
    navigation("/completeMembership");
  };

  const methods = [
    {
      name: "mpesa",
      description: "dddjdduudu",
      icon: "image directory",
    },
    {
      name: "cash",
      description: "dddjdduudu",
      icon: "image directory",
    },
    {
      name: "cheque",
      description: "dddjdduudu",
      icon: "image directory",
    },
  ];
  return (
    <section className="bg-primary-dark  text-primary-light  md:h-svh h-auto flex flex-col items-center justify-center ">
      {/* <h4>Select payment method</h4> */}
      <div className="w-[90%] rounded-lg self-center grid md:grid-cols-2 gap-6 grid-cols-1 bg-secondary-gallery md:w-2/3 ">
        <section className="flex flex-col justify-between p-6">
          <h5 className="text-primary-dark font-bold">Card payment</h5>
          <div className="h-[80%] flex flex-col justify-evenly">
            <Input
              name="name"
              label="Name on credit card"
              placeholder="user name on credit card"
              type="text"
            />
            <Input
              name="number"
              label="card number"
              placeholder="****   ****   ****   ****"
              type="text"
            />
            <div className="flex md:flex-row flex-col w-full justify-between mt-2">
              <Input
                name="expiry"
                label="card expiry"
                placeholder="****   ****   ****   ****"
                type="text"
              />
              <Input
                name="cvc"
                label="card cvc"
                placeholder="****   ****   ****   ****"
                type="text"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-8  p-6">
          {methods.map(({ description, icon, name }) => {
            return (
              <div className="flex h-[90px] rounded-md bg-primary-dark">
                <section className="aspect-square">
                  <img src={icon} />
                </section>
                <section className="flex gap-6 flex-col p-2">
                  <h5>{name}</h5>
                  <p>{description}</p>
                </section>
              </div>
            );
          })}
        </section>
        <div className="p-6 md:col-span-2 w-full">
          <Button
            handleOnclick={() => handleNext()}
            type="button"
            name="proceed"
            className="mb-4 w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Payments;
