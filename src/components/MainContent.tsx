import { FunctionComponent } from "react";

export type MainContentType = {
  className?: string;
};

const MainContent: FunctionComponent<MainContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-end justify-start gap-[67px] max-w-full ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[49px] pr-[46px]">
        <div className="flex-1 flex flex-row items-end justify-start gap-[25px]">
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
      <form className="m-0 self-stretch flex flex-col items-end justify-start gap-[26px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border gap-[5px] max-w-full">
          <b className="relative text-xs tracking-[0.06px] leading-[13px] inline-block font-inter text-white text-center min-w-[61px]">
            Username
          </b>
          <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between py-[15px] pl-[21px] pr-[13px] box-border max-w-full gap-5">
            <div className="h-[50px] w-[350px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 hidden max-w-full" />
            <input
              className="w-[61px] [border:none] [outline:none] bg-[transparent] h-4 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
              placeholder="Username"
              type="text"
            />
            <img
              className="h-5 w-5 relative z-[1]"
              alt=""
              src="/vector-12.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[5px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <b className="relative text-xs tracking-[0.06px] leading-[13px] inline-block font-inter text-white text-center min-w-[59px]">
              Password
            </b>
          </div>
          <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[18px] pb-[16.6px] pl-[21px] pr-2.5 box-border max-w-full gap-5">
            <div className="h-[50px] w-[350px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 hidden max-w-full" />
            <input
              className="w-[61px] [border:none] [outline:none] bg-[transparent] h-4 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
              placeholder="Password"
              type="password"
            />
            <img
              className="self-stretch w-[27px] relative max-h-full min-h-[15px] z-[1]"
              alt=""
              src="/vector-21.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[17px]">
          <b className="relative text-xs tracking-[0.06px] leading-[13px] inline-block font-inter text-white text-center min-w-[109px] z-[1]">
            Forget Password ?
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-6 pr-5">
          <button className="cursor-pointer [border:none] pt-[18px] px-[60px] pb-[19px] bg-[transparent] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini [background:linear-gradient(90deg,_#2a8dfe,_#7545ff)] flex flex-row items-start justify-start z-[1]">
            <div className="h-[50px] w-[188px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini [background:linear-gradient(90deg,_#2a8dfe,_#7545ff)] hidden" />
            <b className="relative text-5xl tracking-[0.06px] leading-[13px] inline-block font-inter text-white text-center min-w-[66px] z-[2]">
              Login
            </b>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MainContent;
