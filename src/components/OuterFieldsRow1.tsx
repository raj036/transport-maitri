import { FunctionComponent, useMemo, type CSSProperties, useRef } from "react";

export type OuterFieldsRow1Type = {
  className?: string;
  driverImage?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const OuterFieldsRow1: FunctionComponent<OuterFieldsRow1Type> = ({
  className = "",
  driverImage,
  propMinWidth,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const driverImageStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-center text-xs text-white font-inter ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
        <div className="flex flex-row items-start justify-start py-0 px-px">
          <b
            className="relative tracking-[0.06px] leading-[13px] inline-block min-w-[76px] z-[1]"
            style={driverImageStyle}
          >
            {driverImage}
          </b>
        </div>
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[12.9px] pb-[13.9px] pl-[21px] pr-[42px] box-border relative max-w-full gap-5 z-[1] text-gray">
          <div className="h-[49.6px] w-[350px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 hidden max-w-full z-[0]" />
          <div className="flex flex-col items-start justify-start pt-[4.9px] px-0 pb-0">
            <b className="relative tracking-[0.06px] leading-[13px] inline-block min-w-[37px] z-[2]">
              image
            </b>
          </div>
          <img
            className="h-[15.9px] w-4 absolute !m-[0] top-[15.8px] right-[17px] z-[2]"
            loading="lazy"
            alt=""
            src="/vector-4.svg"
          />
          {/* Hidden file input */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
          />
          {/* Custom button to trigger file input */}
          <button
            type="button"
            className="cursor-pointer [border:none] py-[4.9px] pl-[9px] pr-2 bg-system-background-dark-base-primary rounded-mini flex flex-row items-start justify-start whitespace-nowrap z-[2]"
            onClick={handleButtonClick}
          >
            <b className="relative text-xs tracking-[0.06px] leading-[13px] inline-block font-inter text-white text-center min-w-[82px] z-[3]">
              Upload image
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OuterFieldsRow1;
