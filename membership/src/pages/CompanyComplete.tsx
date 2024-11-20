import { useNavigate, useNavigation } from "react-router-dom";
import BranchesInformationForm from "../components/BranchesInformationForm";
import Button from "../components/Button";
import { useMembershipState } from "../store/useMembership";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const CompanyComplete = () => {
  const navigation = useNavigate();

  const {
    setIsUpload,
    resetIsUpload,
    incrementCompanyStep,
    decrementCompanyStep,
    isUpload,
    companyStep,
  } = useMembershipState();

  const handleBack = () => {
    console.log(companyStep);

    if (companyStep > 0) {
      decrementCompanyStep();
      return;
    }
    navigation(-1);
  };

  const handleForward = () => {
    console.log(companyStep);

    if (companyStep === 1) {
      navigation("/company/about");
      return;
    }
    incrementCompanyStep();
  };

  return (
    <section className="bg-primary-dark flex flex-col items-center justify-evenly min-h-svh">
      <div className="md:w-1/4 w-[90%]  rounded-md h-[700px] flex flex-col justify-evenly bg-primary-clay p-4">
        <section className="text-primary-light text-center">
          <h5>
            {companyStep === 0
              ? "Add your company authorizers information"
              : "Add your company employees information"}
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
          {companyStep > 0 && (
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

export default CompanyComplete;
