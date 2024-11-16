import { useQuery, useMutation } from "@tanstack/react-query";
import { useMembershipState } from "../store/useMembership";
import { axiosInstance } from "../axios/customAxiosInstance";
import toast from "react-hot-toast";

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

export const useRegisterIndividual = () => {
  const { registerIndividual } = useMembershipState();
  const {
    mutate: createIndividual,
    data,
    error,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: registerIndividual,
    onSuccess: () => {
      toast.success("Success registration successful");
    },
    onError: (err) => {
      toast.error("something went wrong", err.message);
      console.log("register err", err);
    },
  });

  return { createIndividual, data, error, isError, isSuccess };
};

export const useRegisterCompany = () => {
  const { registerCompany } = useMembershipState();
  const {
    mutate: createCompany,
    data,
    error,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: registerCompany,
    onSuccess: () => {
      toast.success("Success registration successful");
    },
    onError: (err) => {
      toast.error("something went wrong", err.message);
      console.log("register err", err);
    },
  });

  return { createCompany, data, error, isError, isSuccess };
};

export const useRegisterStudent = () => {
  const { registerStudent } = useMembershipState();
  const {
    mutate: createStudent,
    data,
    error,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: registerStudent,
    onSuccess: () => {
      toast.success("Success registration successful");
    },
    onError: (err) => {
      toast.error("something went wrong", err.message);
      console.log("register err", err);
    },
  });

  return { createStudent, data, error, isError, isSuccess };
};
