// import { FunctionComponent, useMemo, type CSSProperties } from "react";
// import StatusBarTime from "./StatusBarTime";
// import StatusBarDynamicIsland from "./StatusBarDynamicIsland";
// import StatusBarBattery from "./StatusBarBattery";

// export type StatusBar1Type = {
//   className?: string;
//   time?: string;
//   statusBarBattery?: string;

//   /** Style props */
//   statusBarTimeFlex?: CSSProperties["flex"];
//   statusBarTimeRowGap?: CSSProperties["rowGap"];
//   statusBarTimeAlignSelf?: CSSProperties["alignSelf"];
//   timeMinWidth?: CSSProperties["minWidth"];
//   trueDepthCameraMinWidth?: CSSProperties["minWidth"];
//   iconMobileSignalMinWidth?: CSSProperties["minWidth"];
// };

// const StatusBar1: FunctionComponent<StatusBar1Type> = ({
//   className = "",
//   statusBarTimeFlex,
//   statusBarTimeRowGap,
//   statusBarTimeAlignSelf,
//   timeMinWidth,
//   trueDepthCameraMinWidth,
//   iconMobileSignalMinWidth,
//   time,
//   statusBarBattery,
// }) => {
//   const statusBarStyle: CSSProperties = useMemo(() => {
//     return {
//       flex: statusBarTimeFlex,
//       rowGap: statusBarTimeRowGap,
//       alignSelf: statusBarTimeAlignSelf,
//     };
//   }, [statusBarTimeFlex, statusBarTimeRowGap, statusBarTimeAlignSelf]);

//   const leftSideStyle: CSSProperties = useMemo(() => {
//     return {
//       minWidth: timeMinWidth,
//     };
//   }, [timeMinWidth]);

//   const dynamicIslandStyle: CSSProperties = useMemo(() => {
//     return {
//       minWidth: trueDepthCameraMinWidth,
//     };
//   }, [trueDepthCameraMinWidth]);

//   const rightSideStyle: CSSProperties = useMemo(() => {
//     return {
//       minWidth: iconMobileSignalMinWidth,
//     };
//   }, [iconMobileSignalMinWidth]);

//   return (
//     <div
//       className={`flex-1 rounded-50xl flex flex-row items-start justify-start max-w-full [row-gap:20px] text-center text-base text-white font-callout-bold ${className}`}
//       style={statusBarStyle}
//     >
//       <div
//         className="flex-[0.4776] flex flex-row items-start justify-end pt-[17.5px] px-[35px] pb-[20.5px] box-border min-w-[78px] mq78:flex-1"
//         style={leftSideStyle}
//       >
//         <StatusBarTime time={time} />
//       </div>
//       <div
//         className="flex-1 flex flex-row items-start justify-start py-[11px] px-0 box-border min-w-[94px]"
//         style={dynamicIslandStyle}
//       >
//         <StatusBarDynamicIsland />
//       </div>
//       <div
//         className="flex-[0.6716] flex flex-row items-start justify-start py-[23px] px-[22px] box-border min-w-[78px] text-3xs text-system-background-dark-base-primary mq78:flex-1"
//         style={rightSideStyle}
//       >
//         <div className="w-[78.4px] flex flex-row items-start justify-start gap-2">
//           <img
//             className="h-3 w-[18px] relative"
//             loading="lazy"
//             alt=""
//             src="/icon--mobile-signal.svg"
//           />
//           <img
//             className="h-[11.8px] w-[17px] relative"
//             loading="lazy"
//             alt=""
//             src="/wifi.svg"
//           />
//           <StatusBarBattery undefined={statusBarBattery} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatusBar1;
