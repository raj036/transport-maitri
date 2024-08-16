import { FunctionComponent } from "react";

export type StatusBarBatteryType = {
  className?: string;
  undefined?: string;
};

const StatusBarBattery: FunctionComponent<StatusBarBatteryType> = ({
  className = "",
  undefined = "80",
}) => {
  return (
    <div
      className={`flex-1 flex flex-row items-end justify-start py-0 pl-[5px] pr-0 relative gap-[7px] text-center text-3xs text-system-background-dark-base-primary font-callout-bold ${className}`}
    >
      <a className="[text-decoration:none] flex-1 relative tracking-[0.06px] leading-[13px] font-bold text-[inherit] inline-block min-w-[14px] z-[1]">
        {undefined}
      </a>
      <img
        className="h-full w-[25px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded max-h-full overflow-hidden shrink-0 mix-blend-normal"
        loading="lazy"
        alt=""
        src="/outline.svg"
      />
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.8px]">
        <img
          className="w-[1.4px] h-[4.2px] relative mix-blend-normal"
          loading="lazy"
          alt=""
          src="/battery-end.svg"
        />
      </div>
    </div>
  );
};

export default StatusBarBattery;
