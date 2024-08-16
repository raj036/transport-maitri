import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";

const Page4Blank: FunctionComponent = () => {
  return (
    <div className="w-full relative rounded-31xl bg-darkslategray-200 overflow-hidden flex flex-col items-start justify-start gap-7 leading-[normal] tracking-[normal]">
      <FrameComponent2 />
      <section className="self-stretch h-[632px] relative">
        <button className="cursor-pointer [border:none] py-1.5 pl-[30px] pr-3.5 bg-system-background-dark-base-primary absolute top-[522px] left-[103px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini flex flex-row items-start justify-start gap-6 z-[1]">
          <div className="h-[50px] w-[188px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-system-background-dark-base-primary hidden" />
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <div className="relative text-5xl tracking-[0.06px] leading-[13px] font-semibold font-inter text-white text-center inline-block min-w-[83px] z-[2]">
              Submit
            </div>
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
        <div className="absolute top-[0px] left-[0px] w-full h-full">
          <img
            className="absolute top-[189px] left-[0px] w-[474px] h-[443px]"
            alt=""
            src="/rectangle-1.svg"
          />
          <img
            className="absolute top-[612px] left-[113px] w-[168px] h-[3px] z-[1]"
            loading="lazy"
            alt=""
            src="/line-4.svg"
          />
          <img
            className="absolute top-[0px] left-[25px] rounded-3xs w-[343px] h-[377px] object-cover z-[1]"
            alt=""
            src="/input-background@2x.png"
          />
          <div className="absolute top-[400px] left-[162px] w-[70px] h-[70px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-system-background-dark-base-primary w-full h-full z-[1]" />
            <img
              className="absolute top-[20px] left-[18px] w-[33px] h-[30px] z-[2]"
              alt=""
              src="/vector-1.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page4Blank;
