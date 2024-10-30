import { create } from "zustand";
import { axiosInstance } from "../axios/customAxiosInstance";

interface MembershipState {
  accountType: string;
  setAccountType: (type: string) => void;
  getMembershipTypes: () => any;
  isUpload: boolean;
  hasBranches: boolean;
  branches: number;
  setIsUpload: () => void;
  resetIsUpload: () => void;
  setHasBranches: () => void;
}

export const useMembershipState = create<MembershipState>((set, get) => ({
  accountType: "corporate",
  hasBranches: false,
  branches: 0,
  setAccountType: (type) => {
    set({ accountType: type });
  },
  setHasBranches: () => {
    const { hasBranches } = get();
    if (hasBranches) {
      set({ hasBranches: false });
      return;
    }
    set({ hasBranches: true });
    return;
  },
  isUpload: false,

  resetIsUpload: () => {
    set({ isUpload: false });
  },

  setIsUpload: () => {
    set({ isUpload: true });
  },

  getMembershipTypes: async () => {
    try {
      const { data } = await axiosInstance.get("/memberships");
      return data;
    } catch (error) {
      console.log(error);
      return { error };
    }
  },
}));
