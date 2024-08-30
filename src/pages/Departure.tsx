import { FunctionComponent, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import axios from "../helper/axios";
import { useNavigate } from "react-router-dom";
export type OuterFieldsRow2Type = {
  className?: string;
};

const Departure: FunctionComponent<OuterFieldsRow2Type> = ({
  className = "",
}) => {
  const [data, setData] = useState({
    vehicle_number: null as File | null,
    chassis: null as File | null,
    condition: null as File | null,
    license_image: null as File | null,
    Container_image: null as File | null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPop, setShowPop] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = (ref: React.RefObject<HTMLInputElement>) => {
    ref.current?.click();
  };

  const [fileName, setFileName] = useState({
    vehicle_number: "No file chosen",
    chassis: "No file chosen",
    condition: "No file chosen",
    license_image: "No file chosen",
    Container_image: "No file chosen",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = event.target;

    if (type === "file" && files) {
      const file = files[0];
      setData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
      setFileName((prevFileName) => ({
        ...prevFileName,
        [name]: file ? file.name : "No file chosen",
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      if (data.vehicle_number) {
        formData.append("vehicle_number", data.vehicle_number);
      }
      if (data.chassis) {
        formData.append("chassis", data.chassis);
      }
      if (data.condition) {
        formData.append("condition", data.condition);
      }
      if (data.license_image) {
        formData.append("license_image", data.license_image);
      }
      if (data.Container_image) {
        formData.append("Container_image", data.Container_image);
      }
      const response = await axios.post("/api/departure/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "ngrok-skip-browser-warning": "true",
        },
      });
      console.log(response);

      // Swal.fire({
      //   title: "Registration Successful!",
      //   text: "Your form submitted successfully.",
      //   icon: "success",
      //   confirmButtonColor: "#3085d6",
      //   confirmButtonText: "OK",
      // });
      setIsLoading(false);
      setShowPop(true);
    } catch (error: any) {
      let errorMessage = "An error occurred during registration.";
      if (error.response) {
        errorMessage = error.response.data.detail || errorMessage;
      }
      console.log(error.response.data.detail);
      Swal.fire({
        title: "Error",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#d33",
      });
      setIsLoading(false);
      
    }
  };

  useEffect(() => {
    if (showPop) {
      navigate("/popup");
    }
  }, [showPop, navigate]);

  const vehicleNoRef = useRef<HTMLInputElement>(null);
  const chassisRef = useRef<HTMLInputElement>(null);
  const conditionRef = useRef<HTMLInputElement>(null);
  const licenseImageRef = useRef<HTMLInputElement>(null);
  const containerImageRef = useRef<HTMLInputElement>(null);

  const vehicleCameraRef = useRef<HTMLInputElement>(null);
  const chassisCameraRef = useRef<HTMLInputElement>(null);
  const conditionCameraRef = useRef<HTMLInputElement>(null);
  const licenseCameraRef = useRef<HTMLInputElement>(null);
  const containerCameraRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-[425px] relative pt-8 mx-auto my-0 bg-darkslategray-200 overflow-hidden flex flex-col items-start justify-start px-0 pb-[59px] box-border gap-[15px] leading-[normal] tracking-[normal]">
      <section className="w-full h-[443px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[474px]"
          alt=""
          src="/rectangle-1.svg"
        />
        <img
          className="absolute top-[424px] left-[50%] translate-x-[-50%] translate-y-[50%] w-[168px] h-[3px] z-[1]"
          loading="lazy"
          alt=""
          src="/line-4.svg"
        />
      </section>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full">
        <form
          onSubmit={handleSubmit}
          className="m-0 flex-1 flex flex-col items-start justify-start gap-[29.8px] max-w-full"
        >
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[8.2px]">
            <img
              className="h-[37px] w-[142px] relative object-cover"
              loading="lazy"
              alt=""
              src="/maitriaifull-1-1@2x.png"
            />
          </div>
          <div
            className={`self-stretch z-10 flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-center text-xs text-white font-inter ${className}`}
          >
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <b className="relative tracking-[0.06px] leading-[13px] inline-block ">
                Vehicle no.
              </b>
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[14.9px] pb-[14.8px] pl-[21px] pr-[15px] box-border max-w-full gap-5">
                <input
                  className="w-[80%] [border:none] [outline:none] bg-[transparent] h-[15.8px] flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
                  placeholder="Upload License"
                  name="vehicle_number"
                  type="text"
                  readOnly
                  value={fileName.vehicle_number}
                />
                <img
                  className="h-[18px] w-5 relative z-[1] cursor-pointer"
                  alt=""
                  src="/camera.png"
                  onClick={() => handleButtonClick(vehicleCameraRef)}
                />
                <img
                  className="h-[19.9px] w-5 relative z-[1] cursor-pointer"
                  alt=""
                  src="/vector-4.svg"
                  onClick={() => handleButtonClick(vehicleNoRef)}
                />
                <input
                  ref={vehicleCameraRef}
                  className="hidden"
                  name="chassis"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleChange}
                />
                <input
                  ref={vehicleNoRef}
                  className="hidden"
                  name="vehicle_number"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          {/* Email input field */}
          <div
            className={`self-stretch z-10 flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-center text-xs text-white font-inter ${className}`}
          >
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <b className="relative tracking-[0.06px] leading-[13px] inline-block ">
                Chassis no.
              </b>
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[14.9px] pb-[14.8px] pl-[21px] pr-[15px] box-border max-w-full gap-5">
                <input
                  className="w-[80%] [border:none] [outline:none] bg-[transparent] h-[15.8px] flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
                  placeholder="Upload License"
                  name="chassis"
                  type="text"
                  readOnly
                  value={fileName.chassis}
                />
                <img
                  className="h-[18px] w-5 relative z-[1] cursor-pointer"
                  alt=""
                  src="/camera.png"
                  onClick={() => handleButtonClick(chassisCameraRef)}
                />
                <img
                  className="h-[19.9px] w-5 relative z-[1] cursor-pointer"
                  alt=""
                  src="/vector-4.svg"
                  onClick={() => handleButtonClick(chassisRef)}
                />
                <input
                  ref={chassisCameraRef}
                  className="hidden"
                  name="chassis"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleChange}
                />
                <input
                  ref={chassisRef}
                  className="hidden"
                  name="chassis"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          {/* Email input field */}
          {/* <OuterFieldsRow email="Email" frame15Placeholder="email" /> */}
          {/* <OuterFieldsRow2 /> */}
          <div
            className={`self-stretch z-10 flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-center text-xs text-white font-inter ${className}`}
          >
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <b className="relative tracking-[0.06px] leading-[13px] inline-block ">
                Condition
              </b>
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[14.9px] pb-[14.8px] pl-[21px] pr-[15px] box-border max-w-full gap-5">
                <input
                  className="w-[80%] [border:none] [outline:none] bg-[transparent] h-[15.8px] flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
                  placeholder="Upload License"
                  name="condition"
                  type="text"
                  readOnly
                  value={fileName.condition}
                />
                <img
                  className="h-[18px] w-5 relative z-[1] cursor-pointer"
                  alt=""
                  src="/camera.png"
                  onClick={() => handleButtonClick(conditionCameraRef)}
                />
                <img
                  className="h-[19.9px] w-5 relative z-[1] cursor-pointer"
                  alt=""
                  src="/vector-4.svg"
                  onClick={() => handleButtonClick(conditionRef)}
                />
                <input
                  ref={conditionCameraRef}
                  className="hidden"
                  name="condition"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleChange}
                />
                <input
                  ref={conditionRef}
                  className="hidden"
                  name="condition"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          {/* <OuterFieldsRow
            email="Address"
            propMinWidth="50px"
            frame15Placeholder="Address"
            propWidth="50px"
          /> */}
          <div
            className={`self-stretch z-10 flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-center text-xs text-white font-inter ${className}`}
          >
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <b className="relative tracking-[0.06px] leading-[13px] inline-block ">
                License image
              </b>
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[14.9px] pb-[14.8px] pl-[21px] pr-[15px] box-border max-w-full gap-5">
                <input
                  className="w-[80%] [border:none] [outline:none] bg-[transparent] h-[15.8px] flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
                  placeholder="Upload License"
                  name="license_image"
                  type="text"
                  readOnly
                  value={fileName.license_image}
                />
                <img
                  className="h-[18px] w-5 relative z-[1] cursor-pointer"
                  alt=""
                  src="/camera.png"
                  onClick={() => handleButtonClick(licenseCameraRef)}
                />
                <img
                  className="h-[19.9px] w-5 relative z-[1] cursor-pointer"
                  alt=""
                  src="/vector-4.svg"
                  onClick={() => handleButtonClick(licenseImageRef)}
                />
                <input
                  ref={licenseCameraRef}
                  className="hidden"
                  name="license_image"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleChange}
                />
                <input
                  ref={licenseImageRef}
                  className="hidden"
                  name="license_image"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div
            className={`self-stretch z-10 flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-center text-xs text-white font-inter ${className}`}
          >
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <b className="relative tracking-[0.06px] leading-[13px] inline-block ">
                Container image
              </b>
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[14.9px] pb-[14.8px] pl-[21px] pr-[15px] box-border max-w-full gap-5">
                <input
                  className="w-[80%] [border:none] [outline:none] bg-[transparent] h-[15.8px] flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
                  placeholder="Upload License"
                  name="Container_image"
                  type="text"
                  readOnly
                  value={fileName.Container_image}
                />
                <img
                  className="h-[18px] w-5 relative z-[1] cursor-pointer"
                  alt=""
                  src="/camera.png"
                  onClick={() => handleButtonClick(containerCameraRef)}
                />
                <img
                  className="h-[19.9px] w-5 relative z-[1] cursor-pointer"
                  alt=""
                  src="/vector-4.svg"
                  onClick={() => handleButtonClick(containerImageRef)}
                />
                <input
                  ref={containerCameraRef}
                  className="hidden"
                  name="Container_image"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleChange}
                />
                <input
                  ref={containerImageRef}
                  className="hidden"
                  name="Container_image"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          {/* <OuterFieldsRow1 driverImage="Driver image" />
          <OuterFieldsRow1 driverImage="License image" propMinWidth="86px" /> */}
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
            <button
              type="submit"
              className="cursor-pointer [border:none] py-1.5 pl-[30px] pr-3.5 bg-system-background-dark-base-primary shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini flex flex-row items-start justify-start gap-6 z-[1]"
              disabled={isLoading}
            >
              <div className="h-[50px] w-[188px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-system-background-dark-base-primary hidden" />
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <b className="relative text-5xl tracking-[0.06px] leading-[13px] inline-block font-inter text-white text-center min-w-[66px] z-[2]">
                  {isLoading ? "Submitting..." : "Submit"}
                </b>
              </div>
              <div className="h-[38px] w-[37px] relative shadow-[4px_6px_8px_2px_rgba(0,_0,_0,_0.25)] rounded-3xs [background:linear-gradient(141.35deg,_#00a3ff,_#4b4ced)] z-[2]">
                <div className="absolute top-[0px] left-[0px] shadow-[4px_6px_8px_2px_rgba(0,_0,_0,_0.25)] rounded-3xs [background:linear-gradient(141.35deg,_#00a3ff,_#4b4ced)] w-full h-full hidden" />
                <img
                  className="absolute h-[52.63%] w-[40.54%] top-[23.68%] right-[24.32%] bottom-[23.68%] left-[35.14%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </button>
          </div>
          {/* Loader image */}
          {isLoading && (
            <div className="flex justify-center items-center ">loading ...</div>
          )}
        </form>
      </section>
    </div>
  );
};

export default Departure;
