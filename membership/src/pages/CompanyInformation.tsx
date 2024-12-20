import Input from "../components/Input";
import Button from "../components/Button";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMembershipState } from "../store/useMembership";

const CompanyInformation = () => {
  const { setCompanyData, company } = useMembershipState();
  const navigation = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);

    // if (Object.values(data).includes("")) {
    //   toast.error("haha you gotta provide all values");
    //   return;
    // }

    setCompanyData({
      company_name: data.CompanyName as string,
      address: data.CompanyAddress as string,
      certificate_of_incoperation: data.CertificateOfIncorporation as File,
      cr12: data.CR12 as File,
      postal_code: data.PostalCode as string,
      kra_pin: data.kraPin as string,
      company_phone: data.companyPhone as string,
      company_email: data.companyEmail as string,
      contact_name: data.name as string,
      contact_phone: data.phone as string,
      contact_role: data.role as string,
      contact_email: data.email as string,
      company_info: "info",
    });
    navigation("/types");
  };
  return (
    <section className="bg-primary-dark h-svh  flex flex-col">
      <h4 className="m-8 text-center text-primary-light">
        company information
      </h4>
      <p className="leading-[150%] mb-8 text-center text-primary-light">
        Lorem ipsum dolor sit amet consectetur. Nisi id velit{" "}
      </p>
      <form
        onSubmit={handleSubmit}
        className="md:w-2/3 w-[90%] overflow-scroll p-6 rounded-lg self-center bg-secondary-gallery"
      >
        <h5 className="mb-6 font-bold text-primary-dark">company</h5>
        <section className=" grid md:grid-cols-3 grid-cols-1 gap-4">
          <Input
            name="CompanyName"
            type="text"
            label="Company official name"
            placeholder="your company name"
            defaultValue={company.company_name}
          />
          <Input
            name="CompanyAddress"
            type="text"
            placeholder="your company address"
            label="CompanyAddress"
          />
          <Input
            name="CertificateOfIncorporation"
            type="file"
            placeholder="Upload 2mb max"
            label="Certificate of incorporation"
          />
          <Input
            name="CR12"
            type="file"
            placeholder="Upload 2mb max"
            label="CR12"
          />
          <Input
            name="PostalCode"
            type="text"
            placeholder="your postal code"
            label="Postal code"
          />
          <Input
            name="kraPin"
            type="text"
            placeholder="your company kra pin"
            label="KRA"
          />
          <Input
            name="companyPhone"
            type="text"
            placeholder="your company phone"
            label="company phone"
          />
          <Input
            name="companyEmail"
            type="email"
            placeholder="your company email"
            label="company email"
            defaultValue={company.company_email}
          />
        </section>
        <h5 className="mt-6 mb-6 font-bold text-primary-dark">
          Contact person
        </h5>
        <section className=" grid md:grid-cols-3 grid-cols-1 gap-4">
          <Input
            name="name"
            type="text"
            placeholder="contact person name"
            label="name"
          />
          <Input
            name="phone"
            type="text"
            placeholder="contact person Phone"
            label="Phone"
          />
          <Input
            name="role"
            type="text"
            placeholder="contact person role"
            label="role"
          />
          <Input
            name="email"
            type="email"
            placeholder="contact person email"
            label="Email"
          />
        </section>
        <Button
          type="button"
          name="continue"
          className="float-end w-1/3 my-4 text-primary-light "
        />
      </form>
    </section>
  );
};

export default CompanyInformation;
