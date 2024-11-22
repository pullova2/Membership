import LandingImage from "../assets/images/landing.png";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { services } from "../utils/Services";

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
    <section className="md:px-48 p-6  flex flex-col justify-around bg-primary-light dark:bg-primary-dark min-h-[90vh]">
      <h2 className="text-primary-dark font-bold dark:text-primary-light text-center">
        Pullova Membership
      </h2>
      <h4 className="text-primary-dark text-center dark:text-primary-light">
        These below are services we offer on Membership
      </h4>
      <div className="flex justify-center gap-2 items-center">
        <FaChevronLeft
          className=" text-primary-dark dark:text-primary-light cursor-pointer "
          onClick={(e) => console.log(e)}
          size={20}
        />
        <section className="flex overflow-y-scroll gap-4 no-scrollbar">
          {services.map((item, index) => {
            return (
              <div key={index} className=" flex flex-col">
                <h6 className="text-center">{item.name}</h6>
                <div className="lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] w-[200px] h-[200px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            );
          })}
        </section>

        <FaChevronRight
          size={20}
          className=" text-primary-dark dark:text-primary-light cursor-pointer "
        />
      </div>
      <Link
        to={"/plans"}
        className="bg-primary-dark dark:bg-primary-light gap-4 flex items-center justify-center hover:opacity-80 duration-300 text-primary-light dark:text-primary-light md:w-1/3 w-full py-4 rounded-md self-center"
      >
        Get started
        <FaArrowRight size={24} />
      </Link>
      ;
    </section>
  );
};

export default Landing;
