import { useQuery } from "@tanstack/react-query";
import { useMembershipState } from "../store/useMembership";

export const useGetMemberShipTypes = () => {
  const { getMembershipTypes } = useMembershipState();
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["types"],
    queryFn: getMembershipTypes,
  });
  return { isLoading, data, error, isError };
};

export const useGetMemberShipCompanyTypes = () => {
  const { getMembershipTypes } = useMembershipState();
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["types"],
    queryFn: async () => {},
  });
  return { isLoading, data, error, isError };
};
