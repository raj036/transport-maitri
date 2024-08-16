import { FunctionComponent } from "react";

export type StatusBarDynamicIslandType = {
  className?: string;
};

const StatusBarDynamicIsland: FunctionComponent<StatusBarDynamicIslandType> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-[37px] flex-1 relative rounded-81xl bg-system-background-dark-base-primary ${className}`}
    >
      <div className="absolute top-[calc(50%_-_18.5px)] left-[calc(50%_-_62.5px)] rounded-81xl bg-system-background-dark-base-primary w-20 h-[37px] overflow-hidden hidden" />
      <div className="absolute top-[calc(50%_-_18.5px)] left-[calc(50%_+_25.5px)] rounded-81xl bg-system-background-dark-base-primary w-[37px] h-[37px] overflow-hidden hidden" />
    </div>
  );
};

export default StatusBarDynamicIsland;
