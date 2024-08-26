import { FunctionComponent } from "react";

export type OuterFieldsRow2Type = {
  className?: string;
};

const OuterFieldsRow2: FunctionComponent<OuterFieldsRow2Type> = ({
  className = "",
}) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
      <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
        <b className="relative text-xs tracking-[0.06px] leading-[13px] inline-block font-inter text-white text-center min-w-[61px]">
          Password
        </b>
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[14.9px] pb-[14.8px] pl-[21px] pr-[15px] box-border max-w-full gap-5">
          <div className="h-[49.6px] w-[350px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 hidden max-w-full" />
          <input
            className="w-[61px] [border:none] [outline:none] bg-[transparent] h-[15.8px] flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
            placeholder="Password"
            type="password"
          />
          <img
            className="self-stretch w-[27px] relative max-h-full min-h-[15px] z-[2]"
            alt=""
            src="/vector-2.svg"
          />
        </div>
      </div>
    </div>

    // <div
    //   className={`self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-center text-xs text-white font-inter ${className}`}
    // >
    //   <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
    //     <div className="flex flex-row items-start justify-start py-0 px-px">
    //       <b className="relative tracking-[0.06px] leading-[13px] inline-block min-w-[59px]">
    //         Password
    //       </b>
    //     </div>
    //     <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[17.8px] pb-[16.5px] pl-[21px] pr-3 box-border max-w-full gap-5 z-[1] text-gray">
    //       <div className="h-[49.6px] w-[350px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 hidden max-w-full" />
    //       <b className="relative tracking-[0.06px] leading-[13px] inline-block min-w-[59px] z-[2]">
    //         Password
    //       </b>
    //       <img
    //         className="self-stretch w-[27px] relative max-h-full min-h-[15px] z-[2]"
    //         alt=""
    //         src="/vector-2.svg"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default OuterFieldsRow2;
