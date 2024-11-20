import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "./index.css";
import {
  Gender,
  Landing,
  Login,
  MembershipPlans,
  Register,
  Usage,
  RegisterCompany,
  CompanyInformation,
  RegisterMethod,
  Payments,
  Verification,
  MembershipTypes,
  MembershipPreferences,
  MembershipBranchInformation,
  MembershipEnd,
  ServiceStart,
  CompanyAbout,
  CompanyType,
  PullovaServices,
  Terms,
  CompanyLocation,
  CompanyComplete,
} from "./pages";

// remote apps
const HomeBeauty = lazy(() => import("remote/App"));
// import HomeBeauty from "remote/App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { LogoLayout } from "./layouts";

const App = () => {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <LogoLayout>
          <Landing />
        </LogoLayout>
      ),
    },
    {
      path: "/plans",
      element: <MembershipPlans />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/gender",
      element: <Gender />,
    },
    {
      path: "/usage",
      element: <Usage />,
    },
    {
      path: "/company",
      element: <RegisterCompany />,
    },
    {
      path: "/company/location",
      element: <CompanyLocation />,
    },
    {
      path: "/company/information",
      element: <CompanyInformation />,
    },
    {
      path: "/company/complete",
      element: <CompanyComplete />,
    },
    {
      path: "/registration",
      element: <RegisterMethod />,
    },
    {
      path: "/payment",
      element: <Payments />,
    },
    {
      path: "/Verification",
      element: <Verification />,
    },
    {
      path: "/types",
      element: <MembershipTypes />,
    },
    {
      path: "/branches",
      element: <MembershipBranchInformation />,
    },
    {
      path: "/preferences",
      element: <MembershipPreferences />,
    },
    {
      path: "/completeMembership",
      element: <MembershipEnd />,
    },
    {
      path: "/service",
      element: <ServiceStart />,
    },

    {
      path: "/company/type",
      element: <CompanyType />,
    },
    {
      path: "/company/about",
      element: <CompanyAbout />,
    },
    {
      path: "/service",
      element: <ServiceStart />,
    },
    {
      path: "/terms",
      element: <Terms />,
    },
    // micro apps
    {
      path: "/homebeauty",

      element: (
        <Suspense fallback="loading home beauty...">
          <HomeBeauty />
        </Suspense>
      ),
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <GoogleOAuthProvider clientId="253379340965-9r6nruo7entsudujju3arme9n242enq6.apps.googleusercontent.com">
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
