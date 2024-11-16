import Input from "../components/Input";

const CompanyType = () => {
  const types = [
    {
      id: 1,
      title: "Ngo’s and non profit organizations",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tellus neque vitae risus aliquam penatibus risus neque ac. Scelerisque ullamcorper morbi enim ornare faucibus tempor elit odio maecenas.",
    },
    {
      id: 2,
      title: "profit organization",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tellus neque vitae risus aliquam penatibus risus neque ac. Scelerisque ullamcorper morbi enim ornare faucibus tempor elit odio maecenas.",
    },
  ];
  return (
    <section className="bg-primary-dark min-h-svh flex flex-col items-center justify-center">
      <h3 className="text-primary-light">Choose your company type</h3>
      <div className="flex flex-col items-center md:h-[60vh] h-[70vh] justify-evenly gap-4 mt-4">
        {types.map(({ description, id, title }) => {
          return (
            <section
              key={id}
              className="p-6 bg-primary-clay md:w-[460px] rounded-md w-[90%] text-primary-light flex flex-col gap-6"
            >
              <h4>{title}</h4>
              <p className="leading-[150%]">{description}</p>
            </section>
          );
        })}
      </div>
      <Input name="Next" type="button" />
    </section>
  );
};

export default CompanyType;
