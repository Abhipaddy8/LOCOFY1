import { useMemo } from "react";

const HorizontalBorder = ({
  friJUN7,
  draisRooftopNightclub,
  lasVegasNV,
  propMinWidth,
  propWidth,
  propMinWidth1,
}) => {
  const friJUN7Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="w-[1720px] box-border overflow-x-auto flex flex-row items-start justify-start pt-[19px] px-1.5 pb-2.5 gap-[14.4px] text-left text-base text-white font-inter border-t-[1px] border-solid border-gray-200">
      <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
        <b
          className="relative leading-[22px] inline-block min-w-[74.9px]"
          style={friJUN7Style}
        >
          {friJUN7}
        </b>
      </div>
      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-mini">
        <div className="relative leading-[22px]">{draisRooftopNightclub}</div>
      </div>
      <div
        className="w-[1434.3px] shrink-0 flex flex-row items-start justify-start gap-[28.8px] max-w-[calc(100%_-_274px)] text-right"
        style={frameDivStyle}
      >
        <div
          className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[718px] max-w-full"
          style={frameDiv1Style}
        >
          <div className="self-stretch relative leading-[22px]">
            {lasVegasNV}
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[15px] text-center text-mini-1">
          <div className="w-[135px] box-border flex flex-row items-start justify-end py-0 pr-[40.1px] pl-10 border-[1px] border-solid border-white">
            <b className="relative leading-[44px] uppercase inline-block min-w-[39px]">
              RSVP
            </b>
          </div>
          <div className="bg-white flex flex-row items-start justify-start py-[13px] px-11 text-sm-9 text-black border-[1px] border-solid border-white">
            <div className="h-4 overflow-hidden flex flex-row items-start justify-start">
              <b className="mt-[-14px] relative leading-[44px] uppercase inline-block min-w-[61px] shrink-0 [debug_commit:1de1738]">
                Tickets
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalBorder;
