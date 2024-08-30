// src/components/MainContent.tsx
import { CSSProperties, FunctionComponent, useRef, useState } from "react";
import { useAuth } from "../AuthContext/LoginContext";

export type MainContentType = {
  className?: string;
  driverImage?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const MainContent: FunctionComponent<MainContentType> = ({
  className = "",
}) => {
  const { login } = useAuth();
  const [logData, setLogData] = useState({
    user_email: "",
    user_password: "",
    file: null as File | null,
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pass, setPass] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setLogData((prevData) => ({
        ...prevData,
        file,
      }));
    }
  };

  const handleChange = (
    fieldName: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLogData((prevData) => ({
      ...prevData,
      [fieldName]: e.target.value,
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure that either image or email/password is provided, not both
    if (logData.file && (logData.user_email || logData.user_password)) {
      alert("Please provide either an image or email/password, not both.");
      return;
    }

    if (!logData.file && (!logData.user_email || !logData.user_password)) {
      alert("Please provide either an image or both email and password.");
      return;
    }

    setIsLoading(true);
    try {
      const file = logData.file ?? undefined;
      await login(logData.user_email, logData.user_password, file);
    } finally {
      setIsLoading(false);
    }
  };
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleClearInp = (inputName: string) => {
    setLogData((prevData) => ({
      ...prevData,
      [inputName]: "",
    }));

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

  return (
    <div
      className={`flex-1 flex flex-col items-end justify-start gap-[67px] max-w-full ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between py-0 pl-[49px] pr-[46px]">
        <div className="flex flex-row items-end justify-between gap-[25px] w-full">
          <img
            className="h-[49px] w-[190px] relative object-cover"
            loading="lazy"
            alt=""
            src="/maitriaifull-1-11@2x.png"
          />
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2.5">
            <img
              className="w-10 h-7 relative"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>

      <form
        onSubmit={handleLogin}
        className="m-0 self-stretch flex flex-col items-end justify-start gap-[26px] max-w-full"
      >
        {/* upload image for login */}
        <div
          className={`self-stretch flex flex-row items-start justify-start py-0  pr-0 box-border max-w-full text-center text-xs text-white font-inter ${className}`}
        >
          <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 ">
              <b className="relative tracking-[0.06px] leading-[13px] inline-block min-w-[76px] z-[1]">
                User Image
              </b>
            </div>
            <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[12.9px] pb-[13.9px] pl-[21px] pr-[42px] box-border relative max-w-full gap-5 z-[1] text-gray">
              <div className="h-[49.6px] w-[350px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 hidden max-w-full z-[0]" />
              <div className="flex flex-col items-start justify-start pt-[4.9px] px-0 pb-0">
                <b className="relative tracking-[0.06px] leading-[13px] inline-block min-w-[37px] z-[2]">
                  {fileName || "No file chosen"}
                </b>
              </div>
              {/* Hidden file input */}

              <input
                type="file"
                name="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
              <img
                className="h-[20px] w-6 cursor-pointer absolute !m-[0] top-[12px] right-[17px] z-[2]"
                loading="lazy"
                alt=""
                src="/vector-4.svg"
                onClick={handleButtonClick}
              />
              {/* </button> */}
            </div>
          </div>
        </div>
        {/* upload image for login */}
        <p className="justify-center content-center mx-auto text-white">OR</p>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border gap-[5px] max-w-full">
          <b className="relative text-xs tracking-[0.06px] leading-[13px] inline-block font-inter text-white text-center">
            Email
          </b>
          <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between py-[15px] pl-[21px] pr-[13px] box-border max-w-full gap-5">
            <input
              className="w-[80%] [border:none] focus:bg-transparent [outline:none] bg-[transparent] h-4 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
              placeholder="User Email"
              name="user_email"
              type="text"
              onChange={(e) => handleChange("user_email", e)}
            />
            <img
              className="h-5 w-5 relative z-[1] cursor-pointer"
              alt=""
              src="/vector-12.svg"
              onClick={() => handleClearInp("user_email")}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full mb-11">
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <b className="relative text-xs tracking-[0.06px] leading-[13px] inline-block font-inter text-white text-center min-w-[59px]">
              Password
            </b>
          </div>
          <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[18px] pb-[16.6px] pl-[21px] pr-2.5 box-border max-w-full gap-5">
            <input
              className="w-[80%] [border:none] [outline:none] bg-[transparent] h-4 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
              placeholder="Password"
              name="user_password"
              type={pass ? "text" : "password"}
              onChange={(e) => handleChange("user_password", e)}
            />
            <img
              className="self-stretch w-[27px] relative max-h-full min-h-[15px] z-[1] cursor-pointer"
              alt=""
              src="/vector-21.svg"
              onClick={passShow}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-6 pr-5">
          <button
            type="submit"
            className="cursor-pointer [border:none] pt-[18px] px-[60px] pb-[19px] bg-[transparent] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini [background:linear-gradient(90deg,_#2a8dfe,_#7545ff)] flex flex-row items-start justify-start z-[1]"
            disabled={isLoading}
          >
            <b className="relative text-5xl tracking-[0.06px] leading-[13px] inline-block font-inter text-white text-center min-w-[66px] z-[2]">
              {isLoading ? "Logging in..." : "Login"}
            </b>
          </button>
        </div>

        {/* Loader image */}
        {isLoading && (
          <div className="flex justify-center items-center ">loading ...</div>
        )}
      </form>
    </div>
  );
};

export default MainContent;
