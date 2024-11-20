import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { MembershipPlans, useMembershipState } from "../store/useMembership";
import { useRegisterCompany, useRegisterIndividual } from "../hooks/membership";
import toast from "react-hot-toast";

const Payments = () => {
  const navigation = useNavigate();
  const { accountType } = useMembershipState();
  const { data, error, createIndividual } = useRegisterIndividual();
  const { createCompany } = useRegisterCompany();

  const handleNext = async () => {
    if (accountType === MembershipPlans.corporate) {
      createCompany();
      // navigation("/company/location");
      return;
    }

    if (accountType === MembershipPlans.Individual) {
      createIndividual();
      navigation("/completeMembership");
      return;
    }

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
    <section className="bg-primary-dark  text-primary-light  md:min-h-svh h-auto flex flex-col items-center justify-center ">
      {/* <h4>Select payment method</h4> */}
      <div className="w-[90%] rounded-lg self-center grid md:grid-cols-2 gap-6 grid-cols-1 bg-secondary-gallery md:w-2/3 ">
        <form className="flex flex-col justify-between p-6">
          <h5 className="text-primary-dark font-bold">Card payment</h5>
          <div className="h-[80%] flex flex-col justify-evenly">
            <Input
              name="name"
              className="text-primary-dark mb-4"
              label="Name on credit card"
              placeholder="user name on credit card"
              type="text"
            />
            <Input
              name="number"
              label="card number"
              className="text-primary-dark mb-4"
              placeholder="****   ****   ****   ****"
              type="text"
            />
            <div className="flex md:flex-row flex-col w-full justify-between">
              <Input
                name="expiry"
                label="card expiry"
                className="text-primary-dark"
                placeholder="mm/yy"
                type="text"
              />
              <Input
                name="cvc"
                label="card cvc"
                labelStyles="uppercase"
                className="text-primary-dark"
                placeholder="****"
                type="text"
              />
            </div>
          </div>
        </form>
        <section className="flex flex-col gap-8  p-6">
          {methods.map(({ description, icon, name }) => {
            return (
              <div className="flex rounded-md bg-primary-dark">
                <section className="aspect-square">
                  <img src={icon} />
                </section>
                <section className="flex gap-6 flex-col p-2">
                  <h5>{name}</h5>
                  <p className="leading-[150%]">{description}</p>
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
