import Input from "../components/Input";
import { Button } from "../components";
import { useMembershipState } from "../store/useMembership";
import { useNavigate } from "react-router-dom";
const CompanyLocation = () => {
  const navigation = useNavigate();
  const { setHasAnotherLocation, hasAnotherLocation } = useMembershipState();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    navigation("/company/complete");
  };
  return (
    <section className="bg-primary-dark text-primary-light min-h-svh flex flex-col items-center justify-center gap-16">
      <h4>Do you have another location?</h4>
      <form
        onSubmit={handleSubmit}
        className="p-6 md:w-1/3 w-[90%] flex items-start flex-col"
      >
        <div className="flex flex-col items-start mb-4 justify-center ">
          <h6>Yes</h6>
          <Input
            type="radio"
            name="branches"
            className="mt-0"
            isDisabled={hasAnotherLocation}
            handleOnclick={setHasAnotherLocation}
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h6>No</h6>
          <Input
            type="radio"
            name="branches"
            isDisabled={!hasAnotherLocation}
            handleOnclick={setHasAnotherLocation}
          />
        </div>

        {hasAnotherLocation && (
          <section className="w-full mt-8">
            <Input
              name="location"
              type="text"
              className="text-primary-dark"
              placeholder="Enter location"
            />
          </section>
        )}

        <Button
          name="continue"
          type="submit"
          className="mt-6 w-full rounded-md bg-primary-light text-primary-dark"
        />
      </form>
    </section>
  );
};

export default CompanyLocation;
