import MainContent from "../components/MainContent";
import { Link } from "react-router-dom";

interface HomeProps {
}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className=" w-[425px] mx-auto my-0 relative pt-8 bg-darkslategray-200 overflow-hidden flex flex-col items-start justify-start  px-0 pb-[101px] box-border gap-12 leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-row items-start justify-start py-0 pl-5 pr-[23px] box-border max-w-full">
      <MainContent /> {/* Passing the login prop here */}
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[15px] pl-[69px] pr-[68px] text-center text-[14px] text-white font-inter">
        <div className=" flex flex-col items-end justify-start gap-[43px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
            <b className="relative tracking-[0.06px] font-inter leading-[13px] inline-block min-w-[21px] z-[1]">
              OR
            </b>
          </div>
          <b className=" text-base tracking-[0.06px] text-center leading-[13px] z-[1]">
            No account yet? Open your now.
          </b>
        </div>
      </section>
      <section className="w-full h-[443px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[474px]"
          alt=""
          src="/rectangle-1.svg"
        />
        <img
          className="absolute top-[167px] left-[60px] w-[135px] h-px z-[1]"
          loading="lazy"
          alt=""
          src="/vector-13.svg"
        />
        <img
          className="absolute top-[167px] right-[60px] w-[135px] h-px z-[1]"
          loading="lazy"
          alt=""
          src="/vector-13.svg"
        />
        <img
          className="absolute top-[424px] left-[50%] translate-x-[-50%] translate-y-[50%] w-[168px] h-[3px] z-[1]"
          loading="lazy"
          alt=""
          src="/line-4.svg"
        />
      </section>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-5 pr-[23px] box-border max-w-full">
        <button className="cursor-pointer [border:none] pt-[18px] pb-[19px] pl-[23px] pr-5 bg-system-background-dark-base-primary flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[1]">
          <div className="h-[50px] w-[350px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-system-background-dark-base-primary hidden max-w-full" />
          <Link to="/register" className="no-underline">
            <div className="w-[183px] relative text-5xl tracking-[0.06px] leading-[13px] font-semibold font-inter text-white text-center flex items-center justify-center z-[2]">
              Create Account
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
