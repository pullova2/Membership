import { useNavigate, useNavigation } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useMembershipState } from "../store/useMembership";

const CompanyAbout = () => {
  const navigation = useNavigate();
  const { hasBranches, setHasBranches } = useMembershipState();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    if (hasBranches) {
      {
        !data.branches
          ? alert("please add your number of branches")
          : navigation("/branches");
      }
      return;
    }

    if (!hasBranches) {
      // navigate to complete
      navigation("");
      return;
    }
  };
  return (
    <section className="bg-primary-dark text-primary-light min-h-svh flex flex-col items-center justify-center gap-16">
      <h3>Tell us more about your company</h3>
      <form
        onSubmit={handleSubmit}
        className="p-6 md:w-1/3 w-[90%] flex items-start flex-col"
      >
        <h4 className="first-letter:capitalize mb-4">do you have a branch</h4>
        <div className="flex flex-col items-start mb-4 justify-center ">
          <h6>Yes</h6>
          <Input
            type="radio"
            name="branches"
            className="mt-0"
            isDisabled={hasBranches}
            handleOnclick={setHasBranches}
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h6>No</h6>
          <Input
            type="radio"
            name="branches"
            isDisabled={!hasBranches}
            handleOnclick={setHasBranches}
          />
        </div>

        {hasBranches && (
          <section className="w-full mt-8">
            <h5>How many branches do you have</h5>
            <Input
              name="branches"
              type="number"
              className="text-primary-dark"
              placeholder="enter number of branches"
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

export default CompanyAbout;
