import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useGetMemberShipTypes } from "../hooks/membership";
import ContentLoader from "react-content-loader";
import { LoaderIcon } from "react-hot-toast";
import { MembershipPlans, useMembershipState } from "../store/useMembership";

const MembershipTypes = () => {
  const { data, isError, isLoading } = useGetMemberShipTypes();
  const naviagtion = useNavigate();
  const { setIndividualData, accountType, setCompanyData } =
    useMembershipState();

  const handleNavigate = (id: number) => {
    if (accountType === MembershipPlans.corporate) {
      setCompanyData({ membership_id: id, ride_only: false });
      naviagtion("/payment");
      return;
    }
    setIndividualData({ membership_id: id });

    naviagtion("/usage");
  };

  console.log(data);

  const MembershipLoader = () => {
    return (
      <ContentLoader
        backgroundColor="#e0e0e0"
        width="100%"
        foregroundColor="#c0c0c0"
      >
        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />

        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />

        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />

        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
      </ContentLoader>
    );
  };
  return isError ? (
    <div className="min-h-screen bg-primary-dark text-primary-light items-center justify-center">
      <h4>
        Something went Wrong, Our team is working hard to get this service
        available
      </h4>
    </div>
  ) : isLoading ? (
    <MembershipLoader />
  ) : (
    <section className="bg-primary-dark  text-primary-light md:h-svh h-auto flex flex-col ">
      <div className="md:w-2/3 w-full p-4 flex flex-col md:h-[80%] self-center mt-16">
        <h4 className="mb-6 font-bold">Select a membership </h4>
        <p className="mb-6 font-bold">
          netus sapien leo tortor sagittis. Sit pulvinar in lacus neque porta
        </p>
        <section className="flex-1 gap-4 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 lg:grid-cols-3 items-center">
          {data?.memberships?.map((item: any) => {
            const { name, id, distance_limit, price, currency } = item;
            return (
              <div
                key={id}
                className={`md:h-[80%] h-[600px] rounded-lg flex flex-col justify-around ${
                  name === "silver" ? "bg-green-300" : "bg-red-300"
                }  p-2`}
              >
                <section className="flex justify-between ">
                  <h5>{name}</h5>
                  <p>
                    {currency} {price}
                  </p>
                </section>
                {/* <section>
                  {benefits.map(({ name }) => {
                    return <p>{name}</p>;
                  })}
                </section> */}
                <Button
                  handleOnclick={() => handleNavigate(id)}
                  name="Proceed"
                  className={`capitalize`}
                  type="button"
                ></Button>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default MembershipTypes;
