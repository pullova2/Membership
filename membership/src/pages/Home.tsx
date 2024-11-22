const Home = () => {
  const services = [
    { name: "Ride sharing", image: "", description: "" },
    { name: "Home beauty", image: "", description: "" },
  ];
  return (
    <section className="bg-primary-dark min-h-svh md:min-h-screen flex flex-col items-center justify-center">
      <h4 className="mb-8 text-white">Lorem ipsum dolor sit.</h4>
      <div className="flex w-1/3 items-center justify-center gap-16">
        {services.map((item, _) => {
          return (
            <section className="bg-primary-abbey p-32 hover:group hover:opacity-100 opacity-75 rounded-md">
              <h5>{item.name}</h5>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
