import { FaUpload } from "react-icons/fa";
import { FaCamera, FaRightLong, FaRotate } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { MembershipPlans, useMembershipState } from "../store/useMembership";
import Button from "../components/Button";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const Verification = () => {
  const { accountType, setIndividualData } = useMembershipState();
  const [camera, setCamera] = useState<"user" | "environment">("user");
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [imageUrl, setImageUrl] = useState<string>();
  const [streamImageUrl, setStreamImageUrl] = useState<string>();
  const navigation = useNavigate();

  // refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pickerRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

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

  const handleFilePick = async () => {
    try {
      pickerRef.current?.click();
      pickerRef.current?.addEventListener(
        "change",
        (e) => {
          const target = e.target as HTMLInputElement;
          if (target.files && target.files.length > 0) {
            const image = target.files[0];
            setIndividualData({ id_image: image });
            const imageUrl = URL.createObjectURL(image);
            setImageUrl(imageUrl);
          }
        },
        { once: true }
      );
    } catch (error) {
      console.log("image upload error:", error);
      toast.error("Something went wrong while uploading");
    }
  };

  const stopCurrentStream = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const checkDeviceSupport = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      console.log(devices);
      const hasCamera = devices.some((device) => device.kind === "videoinput");
      if (!hasCamera) {
        toast.error("No camera found on your device");
        return false;
      }
      return true;
    } catch (error) {
      console.error("Error checking device support:", error);
      toast.error("Could not check camera availability");
      return false;
    }
  };

  const handleCamera = async () => {
    const hasCamera = await checkDeviceSupport();
    if (!hasCamera) {
      return;
    }
    try {
      stopCurrentStream();
      const newStream = await navigator.mediaDevices.getUserMedia({
        video: {
          aspectRatio: 3 / 4,
          facingMode: { ideal: camera },
        },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
        setStream(newStream);
        setImageUrl(undefined);
      }
    } catch (error) {
      console.error("Camera access error:", error);
      toast.error(
        `Could not access ${
          camera === "user" ? "front" : "back"
        } camera. Please check permissions.`
      );
    }
  };

  const handleCapture = () => {
    if (!stream) {
      handleCamera();
      return;
    }
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");
    if (context) {
      if (camera === "user") {
        context.scale(-1, 1);
        context.translate(-canvas.width, 0);
      }
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      try {
        const imageUrl = canvas.toDataURL("image/jpeg");

        console.log(imageUrl);

        setImageUrl(imageUrl);
        stopCurrentStream();
        if (videoRef.current) {
          videoRef.current.srcObject = null;
        }
      } catch (error) {
        console.error("Error capturing image:", error);
        toast.error("Failed to capture image");
      }
    }
  };

  const rotateCamera = async () => {
    setCamera((prevCamera) => (prevCamera === "user" ? "environment" : "user"));
    await handleCamera();
  };
  console.log(imageUrl);

  return (
    <section className="bg-primary-dark text-primary-light min-h-svh flex flex-col items-center justify-center gap-16">
      <h4 className="font-bold">
        Add your
        {accountType === MembershipPlans.Individual
          ? "personal identity card"
          : "student id card"}
      </h4>
      <details className="w-[90%] md:w-1/3 p-2 duration-300 ease-linear">
        <summary className="text-lg font-bold">Image requirements</summary>
        {guidelines.map(({ guideline }, index) => (
          <p key={index} className="mt-4">
            {guideline}
          </p>
        ))}
      </details>

      <div className="w-[90%] rounded-lg bg-secondary-gallery md:w-1/3">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          style={{
            transform: camera === "user" ? "scaleX(-1)" : "none",
            display: imageUrl ? "none" : "block",
            width: "100%",
            height: "100%",
          }}
        />
        <canvas ref={canvasRef} style={{ display: "none" }} />
        {imageUrl && (
          <img
            ref={imageRef}
            src={imageUrl}
            className="object-cover aspect-square rounded-lg shadow-lg"
            alt="Selected"
          />
        )}
      </div>
      <div className="md:w-1/3 w-[90%] flex md:flex-row flex-col gap-4 justify-between">
        <input
          type="file"
          accept="image/*"
          className="p-4 border rounded-full"
          hidden
          ref={pickerRef}
        />
        <Button
          type="button"
          name="Upload"
          handleOnclick={handleFilePick}
          className="p-3 duration-300 hover:opacity-90 rounded-full border border-primary-light flex items-center justify-center gap-6"
        >
          <FaUpload />
        </Button>
        {!imageUrl ? (
          <>
            <Button
              type="button"
              name="Capture"
              handleOnclick={handleCapture}
              className="p-3 duration-300 hover:border-opacity-90 rounded-full bg-secondary-gallery text-primary-dark flex items-center justify-center gap-6"
            >
              <FaCamera />
            </Button>
            {/* @ts-ignore */}
            {/* {navigator?.userAgentData.mobile && (
              <Button
                type="button"
                name="Rotate"
                handleOnclick={rotateCamera}
                className="p-3 duration-300 hover:border-opacity-90 rounded-full bg-secondary-pink text-primary-light flex items-center justify-center gap-6"
              >
                <FaRotate />
              </Button>
            )} */}
          </>
        ) : (
          <Button
            type="button"
            name="Retake"
            handleOnclick={handleCamera}
            className="p-3 duration-300 hover:border-opacity-90 rounded-full bg-secondary-gallery text-primary-dark flex items-center justify-center gap-6"
          >
            <FaCamera />
          </Button>
        )}
      </div>
      <div className="flex md:w-1/3 w-[90%] justify-end">
        <Button
          type="button"
          handleOnclick={() => navigation("/types")}
          name="next"
          className="flex items-center justify-center bg-secondary-gallery text-primary-dark gap-4 w-1/3"
        >
          <FaRightLong />
        </Button>
      </div>
    </section>
  );
};

export default Verification;
