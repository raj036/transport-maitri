import { FunctionComponent } from "react";
import { useAuth } from "../AuthContext/LoginContext";
import { Link } from "react-router-dom";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const { logout }: any = useAuth();

  return (
    <>
   
      <Link to="/departure"
        className={`self-stretch h-[174px] flex flex-row items-start justify-start py-0 pl-[22px] pr-[21px] box-border max-w-full text-center text-5xl text-white font-inter ${className}`}
      >
         {/* <Link to="/departure"></Link> */}
        <div className="self-stretch flex-1 [backdrop-filter:blur(40px)] rounded-mini [background:linear-gradient(100.87deg,_#39475b,_#c846a0)] flex flex-col items-start justify-start py-5 px-[23px] box-border relative max-w-full z-[1]">
          <div className="w-[350px] h-[174px] relative [backdrop-filter:blur(40px)] rounded-mini [background:linear-gradient(100.87deg,_#39475b,_#c846a0)] hidden max-w-full z-[0]" />
          <b className="w-[120px] relative tracking-[0.06px] leading-[13px] inline-block min-w-[120px] z-[2]">
            Departure
          </b>
          <div className="w-[37px] h-[38px] absolute !m-[0] right-[12px] bottom-[18px] shadow-[4px_6px_8px_2px_rgba(0,_0,_0,_0.25)] rounded-3xs [background:linear-gradient(141.35deg,_#00a3ff,_#4b4ced)] z-[2]">
            <div className="absolute top-[0px] left-[0px] shadow-[4px_6px_8px_2px_rgba(0,_0,_0,_0.25)] rounded-3xs [background:linear-gradient(141.35deg,_#00a3ff,_#4b4ced)] w-full h-full hidden" />
            <img
              className="absolute h-[52.63%] w-[40.54%] top-[23.68%] right-[24.32%] bottom-[23.68%] left-[35.14%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
              alt=""
              src="/vector.svg"
            />
            <div className="absolute top-[0px] left-[0px] shadow-[4px_6px_8px_2px_rgba(0,_0,_0,_0.25)] rounded-3xs [background:linear-gradient(141.35deg,_#00a3ff,_#4b4ced)] w-full h-full z-[3]">
              <div className="absolute top-[0px] left-[0px] shadow-[4px_6px_8px_2px_rgba(0,_0,_0,_0.25)] rounded-3xs [background:linear-gradient(141.35deg,_#00a3ff,_#4b4ced)] w-full h-full hidden" />
              <img
                className="absolute h-[52.63%] w-[40.54%] top-[23.68%] right-[24.32%] bottom-[23.68%] left-[35.14%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
      </Link>

      {/* <div className="self-stretch flex flex-row items-start justify-center py-0 pl-6 pr-5">
        <button
          onClick={logout}
          className="cursor-pointer [border:none] pt-[18px] px-[60px] pb-[19px] bg-[transparent] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini [background:linear-gradient(90deg,_#2a8dfe,_#7545ff)] flex flex-row items-start justify-start z-[1]"
        >
          <div className="h-[50px] w-[188px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini [background:linear-gradient(90deg,_#2a8dfe,_#7545ff)] hidden" />
          <b className="relative text-5xl tracking-[0.06px] leading-[13px] inline-block font-inter text-white text-center min-w-[66px] z-[2]">
            Logout
          </b>
        </button>
      </div> */}
    </>
  );
};

export default FrameComponent1;
