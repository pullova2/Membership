import LandingImage from "../assets/images/landing.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Landing = () => {
  gsap.registerPlugin(useGSAP);
  const containerRef = useRef<HTMLSelectElement>(null);
  useGSAP(
    () => {
      gsap.to(containerRef.current, { x: 100, rotation: 360, duration: 2 });
    },
    { scope: containerRef }
  );
  return (
    <section
      // ref={containerRef}
      className="md:min-h-[90vh] min-h-[90svh] flex flex-col md:px-48 p-6 text-primary-light bg-primary-dark"
    >
      <div className="grid grid-cols-1  md:grid-cols-2 flex-1  w-full justify-between">
        <section className="flex flex-col gap-4 md:gap-0 justify-evenly">
          <h2 className="font-bold">Pullova Membership</h2>
          <p className="leading-[150%] tracking-wide">
            tt vestibulum etiam. Ornare ipsum ultrices non dignissim aenean
            suspendisse sed tellus neque. Pellentesque t. vestibulum etiam.
            Ornare ipsum ultrices non dignissim aenean suspendisse sed tellus
            neque. Pellentesque t.
          </p>
          <section className="flex gap-4">
            <div className="bg-[#444444] lg:w-2/3 w-full py-8 flex flex-col gap-6 rounded-md">
              <h4>Benefit one</h4>
              <p>
                etiam. Ornare ipsum ultrices non dignissim aenean suspendisse
                sed tellus neque
              </p>
            </div>
            <div className=" bg-[#888C96] md:w-2/3 w-full py-8 flex flex-col gap-6 rounded-md">
              <h4>Benefit one</h4>
              <p>
                etiam. Ornare ipsum ultrices non dignissim aenean suspendisse
                sed tellus neque
              </p>
            </div>
          </section>

          <Link
            to={"/plans"}
            className="bg-primary-light gap-4 flex items-center justify-center hover:opacity-80 duration-300 text-primary-dark md:w-2/4 w-full py-4 rounded-full"
          >
            Get started
            <FaArrowRight size={24} />
          </Link>
        </section>
        <section className="flex items-center flex-col justify-center mt-4 md:mt-0">
          <img src={LandingImage} alt="landing image" />
        </section>
      </div>
    </section>
  );
};

export default Landing;
