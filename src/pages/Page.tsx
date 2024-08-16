import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";

const Page: FunctionComponent = () => {
  return (
    <div className="w-full relative  bg-darkslategray-200 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[165px] box-border gap-[15px] leading-[normal] tracking-[normal]">
      {/* <StatusBar1
        statusBarTimeFlex="unset"
        statusBarTimeRowGap="20px"
        statusBarTimeAlignSelf="stretch"
        timeMinWidth="78px"
        trueDepthCameraMinWidth="94px"
        iconMobileSignalMinWidth="78px"
        time="9:41"
        statusBarBattery="80"
      /> */}
      <div className="flex flex-row items-start justify-start pt-0 px-[21px] pb-[115px]">
        <img
          className="h-[37px] w-[142px] relative object-cover"
          loading="lazy"
          alt=""
          src="/maitriaifull-1-1@2x.png"
        />
      </div>
      <FrameComponent />
      <FrameComponent1 />
      <section className="w-full h-[443px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[474px]"
          alt=""
          src="/rectangle-1.svg"
        />
        <img
          className="absolute top-[423px] left-[113px] w-[168px] h-[3px] z-[1]"
          loading="lazy"
          alt=""
          src="/line-4.svg"
        />
      </section>
    </div>
  );
};

export default Page;
