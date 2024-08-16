import { FunctionComponent } from "react";
import OuterFieldsRow from "../components/OuterFieldsRow";
import OuterFieldsRow2 from "../components/OuterFieldsRow2";
import OuterFieldsRow1 from "../components/OuterFieldsRow1";

const SignUp: FunctionComponent = () => {
  return (
    <div className="w-full relative rounded-31xl bg-darkslategray-200 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[59px] box-border gap-[15px] leading-[normal] tracking-[normal]">
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
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-[21px] box-border max-w-full">
        <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[29.8px] max-w-full">
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[8.2px]">
            <img
              className="h-[37px] w-[142px] relative object-cover"
              loading="lazy"
              alt=""
              src="/maitriaifull-1-1@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <b className="relative text-xs tracking-[0.06px] leading-[13px] inline-block font-inter text-white text-center min-w-[61px]">
                Username
              </b>
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 flex flex-row items-start justify-between pt-[14.9px] pb-[14.8px] pl-[21px] pr-[15px] box-border max-w-full gap-5">
                <div className="h-[49.6px] w-[350px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-darkslategray-100 hidden max-w-full" />
                <input
                  className="w-[61px] [border:none] [outline:none] bg-[transparent] h-[15.8px] flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0 box-border font-inter font-bold text-xs text-gray"
                  placeholder="Username"
                  type="text"
                />
                <img
                  className="h-[19.9px] w-5 relative z-[1]"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
            </div>
          </div>
          <OuterFieldsRow email="Email" frame15Placeholder="email" />
          <OuterFieldsRow2 />
          <OuterFieldsRow
            email="Address"
            propMinWidth="50px"
            frame15Placeholder="Address"
            propWidth="50px"
          />
          <OuterFieldsRow1 driverImage="Driver image" />
          <OuterFieldsRow1 driverImage="License image" propMinWidth="86px" />
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
            <button className="cursor-pointer [border:none] py-1.5 pl-[30px] pr-3.5 bg-system-background-dark-base-primary shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini flex flex-row items-start justify-start gap-6 z-[1]">
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
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
