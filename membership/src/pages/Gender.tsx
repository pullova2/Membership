import { useId, useState } from "react";
import { FaFemale, FaMale } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useMembershipState } from "../store/useMembership";
import toast from "react-hot-toast";

const Gender = () => {
  const navigation = useNavigate();
  const { setIndividualData } = useMembershipState();
  const [gender, setGender] = useState<string>("");
  const handleSubmit = async () => {
    if (!gender) {
      toast.error("Please select a gender");
      return;
    }
    try {
      setIndividualData({ gender: gender });
      navigation("/Verification");
    } catch (error) {
      console.log(error);
    }
  };
  const genders = [
    {
      name: "male",
      symbol: "M",
      icon: <FaMale size={32} />,
    },
    {
      name: "female",
      symbol: "F",
      icon: <FaFemale size={32} />,
    },
  ];
  return (
    <section className="bg-primary-dark h-svh items-center justify-center flex flex-col">
      <div className="text-primary-light flex flex-col w-[90%] md:w-1/5 bg-primary-abbey md:p-4 p-8 rounded-lg">
        <h4 className="mb-6">Tell us more about you</h4>
        <h6 className="mb-6">Select your gender</h6>
        <section className="flex flex-col gap-8 py-8">
          {genders.map((gender, _) => {
            const { name, icon, symbol } = gender;
            return (
              <div
                key={useId()}
                className={`flex justify-between items-center p-6 rounded-md ${
                  name === "male" ? "bg-primary-dark" : "bg-secondary-pink"
                }`}
              >
                <div>
                  <h6>{name}</h6>
                  {icon}
                </div>
                <input
                  type="radio"
                  name="gender"
                  value={symbol}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            );
          })}
        </section>
        <Button
          name="submit"
          type="button"
          handleOnclick={() => handleSubmit()}
        />
      </div>
    </section>
  );
};

export default Gender;
