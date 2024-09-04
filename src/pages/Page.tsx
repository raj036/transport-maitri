import { useAuth } from "../AuthContext/LoginContext";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";

const Page: React.FC = () => {
  const { userData } = useAuth();

  return (
    <div className="max-w-[425px] mx-auto my-0 relative  bg-darkslategray-200 overflow-hidden flex flex-col items-start justify-start pt-8 px-0 pb-[165px] box-border gap-[15px] leading-[normal] tracking-[normal]">
      <div className="flex flex-row items-start justify-start pt-0 px-[21px] pb-[20px]">
        <img
          className="h-[37px] w-[142px] relative object-cover"
          loading="lazy"
          alt=""
          src="/maitriaifull-1-1@2x.png"
        />
      </div>
      <div className="font-inter text-[14px]">
        <h2 className="pl-7 text-white">Welcome {userData.user_name}</h2>
      </div>
      <FrameComponent />
      <FrameComponent1 />
      <section className="w-full h-[443px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[474px]"
          alt=""
          src="/rectangle-1.svg"
        />
      </section>
    </div>
  );
};

export default Page;
