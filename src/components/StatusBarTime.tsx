import { FunctionComponent } from "react";

export type StatusBarTimeType = {
  className?: string;
  time?: string;
};

const StatusBarTime: FunctionComponent<StatusBarTimeType> = ({
  className = "",
  time = "9:41",
}) => {
  return (
    <div
      className={`w-[54px] rounded-3xl flex flex-row items-start justify-start pt-px px-0 pb-0 box-border text-center text-base text-white font-callout-bold ${className}`}
    >
      <a className="[text-decoration:none] flex-1 relative tracking-[-0.32px] leading-[21px] font-semibold text-[inherit]">
        {time}
      </a>
    </div>
  );
};

export default StatusBarTime;
