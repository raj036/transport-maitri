import { FunctionComponent, useRef, useState } from "react";
import axios from "../helper/axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export type OuterFieldsRow2Type = {
  className?: string;
};

const SignUp: FunctionComponent<OuterFieldsRow2Type> = ({ className = "" }) => {
  const [data, setData] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
    phone_no: "",
    driver_address: "",
    driver_images: null as File | null,
    driver_license: null as File | null,
  });

  const [pass, setPass] = useState(false);

  const [fileName, setFileName] = useState({
    driver_images: "No file chosen",
    driver_license: "No file chosen",
  });

  const navigate = useNavigate();

  const driverImagesRef = useRef<HTMLInputElement>(null);
  const driverLicenseRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = (ref: React.RefObject<HTMLInputElement>) => {
    ref.current?.click();
  };

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

  const handleClearInp = (inputName: string) => {
    setData((prevData) => ({
      ...prevData,
      [inputName]: "",
    }));

    // Directly update the input element
    const inputElement = document.querySelector(
      `input[name="${inputName}"]`
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = "";
    }
  };

  const passShow = () => {
    setPass(!pass);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const formattedPhoneNo = data.phone_no.replace(/\D/g, "");

      const formData = new FormData();
      formData.append("user_name", data.user_name);
      formData.append("user_email", data.user_email);
      formData.append("user_password", data.user_password);
      formData.append("phone_no", formattedPhoneNo);
      formData.append("driver_address", data.driver_address);
      if (data.driver_images) {
        formData.append("driver_images", data.driver_images);
      }
      if (data.driver_license) {
        formData.append("driver_license", data.driver_license);
      }
      const response = await axios.post(
        "/register/AI_surveillance_user/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      console.log(response);

      Swal.fire({
        title: "Registration Successful!",
        text: "You have been registered successfully.",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/");
      });
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
    }
  };

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
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <b className="relative text-xs tracking-[0.06px] leading-[13px] inline-block font-inter text-white text-center min-w-[61px]">
                Username
              </b>
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[14.9px] pb-[14.8px] pl-[21px] pr-[15px] box-border max-w-full gap-5">
                <div className="h-[49.6px] w-[350px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 hidden max-w-full" />
                <input
                  className="w-[80%] [border:none] [outline:none] bg-[transparent] h-[15.8px] flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
                  placeholder="Username"
                  name="user_name"
                  type="text"
                  onChange={handleChange}
                  required
                />
                <img
                  className="h-[19.9px] w-5 relative z-[1] cursor-pointer"
                  alt=""
                  src="/vector1.svg"
                  onClick={() => handleClearInp("user_name")}
                />
              </div>
            </div>
          </div>
          {/* Email input field */}
          <div
            className={`self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-center text-xs text-white font-inter ${className}`}
          >
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <div className="flex flex-row items-start justify-start py-0 px-px">
                <b className="relative tracking-[0.06px] leading-[13px] inline-block min-w-[33px]">
                  Email
                </b>
              </div>
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[14.9px] pb-[14.8px] pl-[21px] pr-[15px] box-border max-w-full gap-5">
                <div className="h-[49.6px] w-[350px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 hidden max-w-full" />
                <input
                  className="w-[80%] [border:none] [outline:none] bg-[transparent] h-[15.8px] flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
                  placeholder="email"
                  name="user_email"
                  type="text"
                  onChange={handleChange}
                />
                <img
                  className="h-[19.9px] w-5 relative z-[1] cursor-pointer"
                  alt=""
                  src="/vector1.svg"
                  onClick={() => handleClearInp("user_email")}
                />
              </div>
            </div>
          </div>
          {/* Email input field */}
          <div
            className={`self-stretch flex flex-row items-start z-20 justify-start py-0 pl-px pr-0 box-border max-w-full text-center text-xs text-white font-inter ${className}`}
          >
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <b className="relative text-xs tracking-[0.06px] leading-[13px] inline-block font-inter text-white text-center min-w-[61px]">
                Password
              </b>
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[14.9px] pb-[14.8px] pl-[21px] pr-[15px] box-border max-w-full gap-5">
                <div className="h-[49.6px] w-[350px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 hidden max-w-full" />
                <input
                  className="w-[80%] [border:none] [outline:none] bg-[transparent] h-[15.8px] flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
                  placeholder="Minimum 8 characters"
                  name="user_password"
                  type={pass ? "text" : "password"}
                  onChange={handleChange}
                  required
                />
                <img
                  className="h-[20px] w-6 relative z-[1] cursor-pointer"
                  alt=""
                  src="/vector-2.svg"
                  onClick={passShow}
                />
              </div>
            </div>
          </div>

          {/* Phone number */}
          <div
            className={`self-stretch flex flex-row items-start z-20 justify-start py-0 pl-px pr-0 box-border max-w-full text-center text-xs text-white font-inter ${className}`}
          >
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <b className="relative text-xs tracking-[0.06px] leading-[13px] inline-block font-inter text-white text-center min-w-[61px]">
                Phone Number
              </b>
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[14.9px] pb-[14.8px] pl-[21px] pr-[15px] box-border max-w-full gap-5">
                <div className="h-[49.6px] w-[350px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 hidden max-w-full" />
                <input
                  className="w-[80%] [border:none] [outline:none] bg-[transparent] h-[15.8px] flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
                  placeholder="Number"
                  name="phone_no"
                  type="number"
                  onChange={handleChange}
                  required
                />
                <img
                  className="h-[19.9px] w-5 relative z-[1] cursor-pointer"
                  alt=""
                  src="/vector1.svg"
                  onClick={() => handleClearInp("phone_no")}
                />
              </div>
            </div>
          </div>
          {/* Phone number */}

          <div className="self-stretch flex z-10 flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <b className="relative text-xs tracking-[0.06px] leading-[13px] inline-block font-inter text-white text-center min-w-[61px]">
                Address
              </b>
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[14.9px] pb-[14.8px] pl-[21px] pr-[15px] box-border max-w-full gap-5">
                <div className="h-[49.6px] w-[350px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 hidden max-w-full" />
                <input
                  className="w-[80%] [border:none] [outline:none] bg-[transparent] h-[15.8px] flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
                  placeholder="Address"
                  name="driver_address"
                  type="text"
                  onChange={handleChange}
                  required
                />
                <img
                  className="h-[19.9px] w-5 relative z-[1] cursor-pointer"
                  alt=""
                  src="/vector1.svg"
                  onClick={() => handleClearInp("driver_address")}
                />
              </div>
            </div>
          </div>

          <div
            className={`self-stretch z-10 flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-center text-xs text-white font-inter ${className}`}
          >
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <b className="relative tracking-[0.06px] leading-[13px] inline-block min-w-[92px]">
                Driver Images
              </b>
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[14.9px] pb-[14.8px] pl-[21px] pr-[15px] box-border max-w-full gap-5">
                <input
                  className="w-[80%] [border:none] [outline:none] bg-[transparent] h-[15.8px] flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
                  placeholder="Upload Images"
                  name="driver_images"
                  type="text"
                  readOnly
                  value={fileName.driver_images}
                />
                <img
                  className="h-[19.9px] w-5 relative z-[1] cursor-pointer"
                  alt=""
                  src="/vector-4.svg"
                  onClick={() => handleButtonClick(driverImagesRef)}
                />
                <input
                  ref={driverImagesRef}
                  className="hidden"
                  name="driver_images"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          {/* License image */}
          <div
            className={`self-stretch z-10 flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-center text-xs text-white font-inter ${className}`}
          >
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <b className="relative tracking-[0.06px] leading-[13px] inline-block">
                Driver License
              </b>
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[14.9px] pb-[14.8px] pl-[21px] pr-[15px] box-border max-w-full gap-5">
                <input
                  className="w-[80%] [border:none] [outline:none] bg-[transparent] h-[15.8px] flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
                  placeholder="Upload License"
                  name="driver_license"
                  type="text"
                  readOnly
                  value={fileName.driver_license}
                />
                <img
                  className="h-[19.9px] w-5 relative z-[1] cursor-pointer"
                  alt=""
                  src="/vector-4.svg"
                  onClick={() => handleButtonClick(driverLicenseRef)}
                />
                <input
                  ref={driverLicenseRef}
                  className="hidden"
                  name="driver_license"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
            <button
              type="submit"
              className="cursor-pointer [border:none] py-1.5 pl-[30px] pr-3.5 bg-system-background-dark-base-primary shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini flex flex-row items-start justify-start gap-6 z-[1]"
            >
              <div className="h-[50px] w-[188px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-system-background-dark-base-primary hidden" />
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                {/* <Link to=""> */}
                <div className="relative text-5xl tracking-[0.06px] leading-[13px] font-semibold font-inter text-white text-center inline-block min-w-[83px] z-[2]">
                  Submit
                </div>
                {/* </Link> */}
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
        </form>
      </section>
    </div>
  );
};

export default SignUp;
