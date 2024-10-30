import { MdBackup } from "react-icons/md";
import { useMembershipState } from "../store/useMembership";
import Button from "./Button";
import Input from "./Input";

const BranchesInformationForm = () => {
  const { isUpload } = useMembershipState();
  if (isUpload) {
    return (
      <form className="h-[50%]  flex flex-col justify-evenly ">
        <section className="text-primary-light text-center">
          <h6>Upload a file with name and email</h6>
          <p>supported formats .pdf,</p>
        </section>
        <div className="flex flex-col items-center justify-between p-4 bg-secondary-gallery rounded-lg ">
          <MdBackup size={150} className="text-primary-abbey" />
          <Input type="file" name="employees" className="hidden" />
          <Button
            name="Upload"
            type="button"
            className="w-2/3 text-primary-light"
          />
        </div>
      </form>
    );
  }
  return (
    <form className="h-[50%]  rounded-lg flex flex-col justify-evenly ">
      <Input name="name" placeholder="name" type="text" className="w-full" />
      <Input name="email" placeholder="email" type="email" className="w-full" />
      <Button
        name="Submit"
        type="button"
        className="w-full text-primary-light"
      />
    </form>
  );
};

export default BranchesInformationForm;
