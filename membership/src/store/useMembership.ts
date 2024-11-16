import { create } from "zustand";
import { axiosInstance } from "../axios/customAxiosInstance";
import axios from "axios";
import toast from "react-hot-toast";

interface MembershipState {
  accountType: MembershipPlans;
  setAccountType: (type: MembershipPlans) => void;
  getMembershipTypes: () => any;
  isUpload: boolean;
  hasBranches: boolean;
  branches: number;
  setIsUpload: () => void;
  individual: individualRegister;
  student: studentRegister;
  setIndividualData: (data: individualRegister) => void;
  setStudentData: (data: studentRegister) => void;
  setCompanyData: (data: CompanyRegister) => void;
  resetIsUpload: () => void;
  setHasBranches: () => void;
  registerIndividual: () => any;
  registerCompany: () => any;
  registerStudent: () => any;
  loginUser: (data: LoginUser) => any;
  branchStep: number;
  company: CompanyRegister;
  incrementBranchStep: () => void;
  decrementBranchStep: () => void;
  createBranch: () => void;
  addBranchEmployees: () => void;
}

export enum MembershipPlans {
  Individual = "individual",
  corporate = "corporate",
  Student = "student",
}

type LoginUser = {
  email: string;
  password: string;
};

type CompanyRegister = {
  name?: string;
  company_email?: string;
  membership_id?: number;
  ride_only?: boolean;
  company_info?: string;
  password?: string;
  password_confirmation?: string;
  address?: string;
  certificate_of_incoperation?: string;
  cr12?: string;
  postal_code?: string;
  kra_pin: string;
  company_phone?: string;
  contact_phone?: string;
  contact_name?: string;
  contact_role?: string;
  contact_email?: string;
};

type individualRegister = {
  name?: string;
  email?: string;
  email_verified?: boolean;
  gender?: string;
  id_image?: File | string;
  membership_id?: number | string;
  ride_only?: boolean;
  member?: boolean;
  password?: string;
  password_confirmation?: string;
};

type studentRegister = {
  name?: string;
  email?: string;
  email_verified?: boolean;
  gender?: string;
  id_image?: File | string;
  membership_id?: number | string;
  ride_only?: boolean;
  member?: boolean;
  password?: string;
  password_confirmation?: string;
};

type CompanyContactPerson = {
  name: string;
  phone: string;
  role: string;
  email: string;
};

type companydetails = {};

type companyAdditionalDetails = {
  companyName: string;
  companyAddress: string;
  postalCode: string;
  kraNumber: string;
  companyPhone: string;
  companyEmail: string;
  contactPerson: CompanyContactPerson;
};

export const useMembershipState = create<MembershipState>((set, get) => ({
  accountType: MembershipPlans.Individual,

  student: {
    email: "",
    email_verified: false,
    gender: "",
    id_image: "",
    member: false,
    membership_id: 0,
    name: "",
    password: "1234",
    ride_only: true,
  },

  individual: {
    email: "",
    email_verified: false,
    gender: "",
    id_image: "",
    member: false,
    membership_id: 0,
    name: "",
    password: "1234",
    ride_only: true,
  },

  company: {
    company_email: "",
    company_info: "",
    membership_id: 0,
    name: "",
    company_name: "",
    password: "",
    password_confirmation: "",
    ride_only: false,
    address: "",
    certificate_of_incoperation: "",
    cr12: "",
    postal_code: "",
    kra_pin: "",
    company_phone: "",
    contact_phone: "",
    contact_name: "",
    contact_role: "",
    contact_email: "",
  },

  hasBranches: false,

  branches: 0,

  branchStep: 0,

  setAccountType: (type: MembershipPlans) => {
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

  setIndividualData: (newData) => {
    return set((state) => ({
      individual: { ...state.individual, ...newData },
    }));
  },

  isUpload: false,

  resetIsUpload: () => {
    set({ isUpload: false });
  },

  setIsUpload: () => {
    set({ isUpload: true });
  },

  getMembershipTypes: async () => {
    console.log("call me");
    try {
      const response = await axiosInstance.get("memberships");
      return response;
    } catch (error) {
      console.log("get Membership Error", error);
      throw error;
    }
  },

  incrementBranchStep: () => {
    const { branchStep } = get();
    set({ branchStep: Math.min(branchStep + 1, 2) });
  },

  decrementBranchStep: () => {
    const { branchStep } = get();
    set({ branchStep: Math.max(branchStep - 1, 0) });
  },

  registerIndividual: async () => {
    const { individual } = get();
    try {
      const response = await axiosInstance.post("store/individual", individual);

      return response.data;
    } catch (error) {
      console.log("register", error);
      throw error;
    }
  },

  registerCompany: async () => {
    try {
      const { company } = get();
      const response = await axiosInstance.post("create/company", company);
      return response;
    } catch (error) {
      return error;
    }
  },

  registerStudent: async () => {
    try {
      const {} = get();
      const response = await axiosInstance.post("create/student");
      return response;
    } catch (error) {
      return error;
    }
  },

  loginUser: async (data: LoginUser) => {
    try {
      const response = await axiosInstance.post("store/individual", data);
      return response;
    } catch (error) {
      return error;
    }
  },

  setStudentData: (newData: studentRegister) => {
    return set((state) => ({
      student: { ...state.student, ...newData },
    }));
  },

  setCompanyData: (newData: CompanyRegister) => {
    return set((state) => ({
      company: { ...state.company, ...newData },
    }));
  },

  createBranch: () => {},

  addBranchEmployees: () => {},
}));