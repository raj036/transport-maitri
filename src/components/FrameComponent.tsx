import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <>
      <Link
        to="/arrival"
        className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[83px] pl-[22px] pr-[21px] box-border max-w-full text-center text-5xl text-white font-inter ${className}`}
      >
        <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini [background:linear-gradient(100.87deg,_#39475b,_#c846a0)] flex flex-col items-end justify-start pt-5 px-3 pb-[18px] box-border gap-[85px] max-w-full z-[1]">
          <div className="w-[350px] h-[174px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini [background:linear-gradient(100.87deg,_#39475b,_#c846a0)] hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[11px]">
            <b className="relative tracking-[0.06px] leading-[13px] inline-block min-w-[80px] z-[2]">
              Arrival
            </b>
          </div>
          <div className="w-[37px] h-[38px] relative shadow-[4px_6px_8px_2px_rgba(0,_0,_0,_0.25)] rounded-3xs [background:linear-gradient(141.35deg,_#00a3ff,_#4b4ced)] z-[2]">
            <div className="absolute top-[0px] left-[0px] shadow-[4px_6px_8px_2px_rgba(0,_0,_0,_0.25)] rounded-3xs [background:linear-gradient(141.35deg,_#00a3ff,_#4b4ced)] w-full h-full hidden" />
            <img
              className="absolute h-[52.63%] w-[40.54%] top-[23.68%] right-[24.32%] bottom-[23.68%] left-[35.14%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default FrameComponent;
