import { FunctionComponent } from "react";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-14 text-left text-5xl text-cornflowerblue font-inter ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
        {/* <StatusBar1
          statusBarTimeFlex="unset"
          statusBarTimeRowGap="unset"
          statusBarTimeAlignSelf="stretch"
          timeMinWidth="unset"
          trueDepthCameraMinWidth="unset"
          iconMobileSignalMinWidth="unset"
          time="9:41"
          statusBarBattery="80"
        /> */}
        <div className="flex flex-row items-start justify-start py-0 px-[21px]">
          <img
            className="h-[37px] w-[142px] relative object-cover"
            loading="lazy"
            alt=""
            src="/maitriaifull-1-1@2x.png"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[21px]">
        <div className="relative tracking-[0.06px] leading-[25px] font-semibold">
          <span>Facial</span>
          <span className="text-white"> recognition</span>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
