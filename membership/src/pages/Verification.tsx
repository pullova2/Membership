import { FaUpload } from "react-icons/fa";
import { FaCamera, FaRightLong, FaRotate } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useMembershipState } from "../store/useMembership";
import Button from "../components/Button";
import { useRef, useState } from "react";

const Verification = () => {
  const { accountType } = useMembershipState();
  const [camera, setCamera] = useState("user");
  const navigation = useNavigate();

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFilePick = async () => {
    try {
    } catch (error) {}
  };

  const handleCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { aspectRatio: 3 / 4 },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      return;
    } catch (error) {
      alert("please use your front camera");
      console.log(error);
    }
  };

  const handleCapture = () => {};
  const handleNext = () => {
    navigation("/types");
  };
  const guidelines = [
    {
      guideline: "Lorem ipsum dolor sit amet consectetur. Consequat morbi viv ",
    },
    {
      guideline: "Lorem ipsum dolor sit amet consectetur. Consequat morbi viv ",
    },
    {
      guideline: "Lorem ipsum dolor sit amet consectetur. Consequat morbi viv ",
    },
  ];
  return (
    <section className="bg-primary-dark  text-primary-light  min-h-svh flex flex-col items-center justify-center gap-16">
      <h4 className="font-bold">
        Add your{" "}
        {accountType === "" ? "personal identity card" : "Profile picture"}
      </h4>
      <details className="w-[90%] md:w-1/3 p-2 duration-300 ease-linear">
        <summary className="text-lg font-bold">card requirements</summary>
        {guidelines.map(({ guideline }, _) => {
          return <p className="mt-4">{guideline}</p>;
        })}
      </details>

      <div
        onDrag={() => console.log("drag me")}
        draggable
        className="w-[90%] rounded-lg  bg-secondary-gallery md:w-1/3"
      >
        <video ref={videoRef} autoPlay autoFocus />
        <canvas ref={canvasRef} />
      </div>
      <div className="md:w-1/3 w-[90%] flex md:flex-row flex-col gap-4 justify-between">
        <Button
          type="button"
          name="Upload"
          className="p-3 duration-300 hover:opacity-90 rounded-full border border-primary-light flex items-center justify-center gap-6"
        >
          <FaUpload />
        </Button>
        <Button
          type="button"
          name="Capture"
          handleOnclick={() => handleCamera()}
          className="p-3 duration-300 hover:border-opacity-90 rounded-full bg-secondary-gallery text-primary-dark flex items-center justify-center gap-6"
        >
          <FaCamera />
        </Button>
        <Button
          type="button"
          name="Rotate"
          handleOnclick={() => {
            if (camera === "user") {
              setCamera("environment");
              return;
            }
            setCamera("user");
          }}
          className="p-3 duration-300 hover:border-opacity-90 rounded-full bg-secondary-pink text-primary-light flex items-center justify-center gap-6"
        >
          <FaRotate />
        </Button>
      </div>
      <div className="flex md:w-1/3 w-[90%] justify-end">
        <Button
          type="button"
          handleOnclick={() => handleNext()}
          name="next"
          className="flex items-center justify-center bg-secondary-gallery text-primary-dark gap-4"
        >
          <FaRightLong />
        </Button>
      </div>
    </section>
  );
};

export default Verification;
