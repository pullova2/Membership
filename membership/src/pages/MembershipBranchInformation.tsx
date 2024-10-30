import { useNavigate, useNavigation } from "react-router-dom";
import BranchesInformationForm from "../components/BranchesInformationForm";
import Button from "../components/Button";
import { useMembershipState } from "../store/useMembership";
const MembershipBranchInformation = () => {
  const navigation = useNavigate();
  const handleBack = () => {
    navigation(-1);
  };
  const { setIsUpload, resetIsUpload, isUpload } = useMembershipState();
  return (
    <section className="bg-primary-dark flex flex-col items-center justify-evenly min-h-svh">
      <div className="md:w-1/4 w-[90%]  rounded-md h-[700px] flex flex-col justify-evenly bg-primary-clay p-4">
        <section className="text-primary-light text-center">
          <h5>Add your managers information</h5>
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
          <Button
            type="button"
            name="back"
            handleOnclick={() => handleBack()}
            className="bg-primary-abbey text-primary-light rounded-md"
          />
          <Button
            type="button"
            name="next"
            className="bg-primary-abbey text-primary-light rounded-md"
          />
        </section>
      </div>
    </section>
  );
};

export default MembershipBranchInformation;
