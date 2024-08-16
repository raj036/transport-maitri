import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type OuterFieldsRowType = {
  className?: string;
  email?: string;
  frame15Placeholder?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const OuterFieldsRow: FunctionComponent<OuterFieldsRowType> = ({
  className = "",
  email,
  propMinWidth,
  frame15Placeholder,
  propWidth,
}) => {
  const emailStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameInputStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-center text-xs text-white font-inter ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
        <div className="flex flex-row items-start justify-start py-0 px-px">
          <b
            className="relative tracking-[0.06px] leading-[13px] inline-block min-w-[33px]"
            style={emailStyle}
          >
            {email}
          </b>
        </div>
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[14.9px] pb-[14.8px] pl-[21px] pr-[15px] box-border max-w-full gap-5">
          <div className="h-[49.6px] w-[350px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 hidden max-w-full" />
          <input
            className="w-8 [border:none] [outline:none] bg-[transparent] h-[15.8px] flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
            placeholder={frame15Placeholder}
            type="text"
            style={frameInputStyle}
          />
          <img
            className="h-[19.9px] w-5 relative z-[1]"
            alt=""
            src="/vector-11.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default OuterFieldsRow;
