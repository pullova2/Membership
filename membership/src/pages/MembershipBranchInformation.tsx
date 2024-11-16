import { useNavigate, useNavigation } from "react-router-dom";
import BranchesInformationForm from "../components/BranchesInformationForm";
import Button from "../components/Button";
import { useMembershipState } from "../store/useMembership";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
const MembershipBranchInformation = () => {
  const navigation = useNavigate();

  const {
    setIsUpload,
    resetIsUpload,
    incrementBranchStep,
    decrementBranchStep,
    isUpload,
    branchStep,
  } = useMembershipState();

  const handleBack = () => {
    console.log(branchStep);

    if (branchStep > 0) {
      decrementBranchStep();
      return;
    }
    navigation(-1);
  };

  const handleForward = () => {
    if (branchStep === 2) {
      navigation("/completeMembership");
      return;
    }
    incrementBranchStep();
  };

  return (
    <section className="bg-primary-dark flex flex-col items-center justify-evenly min-h-svh">
      <div className="md:w-1/4 w-[90%]  rounded-md h-[700px] flex flex-col justify-evenly bg-primary-clay p-4">
        <section className="text-primary-light text-center">
          <h5>
            {branchStep === 0
              ? "Add your manager's information"
              : branchStep === 1
              ? "Add your authorizers information"
              : "Add your employees information"}
          </h5>
        </section>
        <section className="flex justify-between items-center mt-4">
          <Button
            type="button"
            handleOnclick={resetIsUpload}
            name="use form"
            className={`bg-primary-abbey text-primary-light rounded-md ${
              !isUpload ? "border border-primary-light" : ""
            }`}
          />
          <Button
            type="button"
            handleOnclick={setIsUpload}
            name="upload"
            className={`bg-primary-abbey text-primary-light rounded-md ${
              isUpload ? "border border-primary-light" : ""
            }`}
          />
        </section>
        <BranchesInformationForm />
        <section className="flex justify-between items-center mt-4">
          {branchStep > 0 && (
            <Button
              type="button"
              name=""
              handleOnclick={() => handleBack()}
              className="bg-primary-abbey flex items-center justify-center gap-4 text-primary-light rounded-md"
            >
              <FaArrowLeft />
              Back
            </Button>
          )}

          <Button
            handleOnclick={handleForward}
            type="button"
            name="next"
            className="bg-primary-abbey flex items-center justify-center gap-4 text-primary-light rounded-md"
          >
            <FaArrowRight />
          </Button>
        </section>
      </div>
    </section>
  );
};

export default MembershipBranchInformation;
