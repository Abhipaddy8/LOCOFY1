import HorizontalBorder from "./HorizontalBorder";

const FrameComponent1 = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-38xl text-white font-inter">
      <div className="self-stretch bg-steelblue overflow-hidden flex flex-col items-center justify-start pt-[63.2px] px-5 pb-[84px] box-border gap-[9.8px] max-w-full z-[4] mq925:pt-[27px] mq925:pb-9 mq925:box-border mq1350:pt-[41px] mq1350:pb-[55px] mq1350:box-border">
        <div className="w-[1720px] flex flex-row items-start justify-center pt-0 pb-[35.9px] pr-0 pl-px box-border max-w-full text-center text-gray-100 font-source-serif-pro">
          <h1 className="m-0 w-[177.1px] relative text-inherit tracking-[5.7px] leading-[62.72px] uppercase font-normal font-inherit flex items-center justify-center shrink-0 mq925:text-27xl mq925:leading-[50px] mq450:text-15xl mq450:leading-[38px]">
            TOUR
          </h1>
        </div>
        <div className="w-[1719.4px] flex flex-col items-start justify-start gap-[0.1px] max-w-full text-base-5">
          <b className="relative leading-[19.2px] inline-block shrink-0 [debug_commit:1de1738] max-w-full">
            <span className="[text-decoration:underline]">Track</span> to get
            concert, live stream and tour updates.
          </b>
          <div className="self-stretch flex flex-row items-end justify-between shrink-0 [debug_commit:1de1738] gap-[20px] text-sm-7 mq450:flex-wrap">
            <b className="relative leading-[17px] inline-block min-w-[111px]">
              Upcoming Dates
            </b>
            <div className="w-[143px] flex flex-row items-end justify-start gap-[5.5px] opacity-[0.4]">
              <img
                className="h-5 w-[19.1px] relative min-h-[20px]"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[1.9px]">
                <img
                  className="self-stretch h-[15.4px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/group@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1720px] box-border overflow-x-auto flex flex-col items-start justify-start max-w-full text-base border-b-[1px] border-solid border-gray-200">
          <div className="w-[1720px] box-border overflow-x-auto flex flex-row items-start justify-start pt-[19px] px-1.5 pb-2.5 gap-[14.2px] text-base-3 border-t-[1px] border-solid border-gray-200">
            <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
              <b className="relative leading-[22px] inline-block min-w-[86px]">
                Fri, MAY 24
              </b>
            </div>
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-mini">
              <div className="relative leading-[22px]">
                Drais Rooftop Nightclub
              </div>
            </div>
            <div className="w-[1423.6px] shrink-0 flex flex-row items-start justify-start gap-[28.8px] max-w-[calc(100%_-_284px)] text-right text-base">
              <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[712px] max-w-full">
                <div className="self-stretch relative leading-[22px]">
                  Las Vegas, NV
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
          <div className="w-[1720px] box-border overflow-x-auto flex flex-row items-start justify-start pt-[19px] px-1.5 pb-2.5 gap-[14.9px] text-base-1 border-t-[1px] border-solid border-gray-200">
            <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
              <b className="relative leading-[22px] inline-block min-w-[90px]">
                Sat, MAY 25
              </b>
            </div>
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
              <div className="relative leading-[22px]">{`Drai's Beachclub & Nightclub`}</div>
            </div>
            <div className="w-[1382.3px] shrink-0 flex flex-row items-start justify-start gap-[28.8px] max-w-[calc(100%_-_326px)] text-right text-base">
              <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[684px] max-w-full">
                <div className="self-stretch relative leading-[22px]">
                  Las Vegas, NV
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
          <div className="w-[1720px] box-border overflow-x-auto flex flex-row items-start justify-start pt-[19px] px-1.5 pb-2.5 gap-[14.9px] border-t-[1px] border-solid border-gray-200">
            <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
              <b className="relative leading-[22px] inline-block min-w-[79.3px]">
                Sat, JUN 1
              </b>
            </div>
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-base-1">
              <div className="relative leading-[22px]">
                Point Break Festival 2024
              </div>
            </div>
            <div className="w-[1416.5px] shrink-0 flex flex-row items-start justify-start gap-[28.8px] max-w-[calc(100%_-_291px)] text-right">
              <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[707px] max-w-full">
                <div className="self-stretch relative leading-[22px]">
                  Virginia Beach, VA
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
          <HorizontalBorder
            friJUN7="Fri, JUN 7"
            draisRooftopNightclub="Drais Rooftop Nightclub"
            lasVegasNV="Las Vegas, NV"
          />
          <div className="w-[1720px] box-border overflow-x-auto flex flex-row items-start justify-start pt-[19px] px-1.5 pb-2.5 gap-[14.9px] text-base-6 border-t-[1px] border-solid border-gray-200">
            <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
              <b className="relative leading-[22px] inline-block min-w-[79.3px]">
                Sat, JUN 8
              </b>
            </div>
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-base-1">
              <div className="relative leading-[22px]">{`Drai's Beachclub & Nightclub`}</div>
            </div>
            <div className="w-[1393px] shrink-0 flex flex-row items-start justify-start gap-[28.8px] max-w-[calc(100%_-_315px)] text-right text-base">
              <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[692px] max-w-full">
                <div className="self-stretch relative leading-[22px]">
                  Las Vegas, NV
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
          <div className="w-[1720px] box-border overflow-x-auto flex flex-row items-start justify-start pt-[19px] px-1.5 pb-2.5 gap-[14.7px] text-base-8 border-t-[1px] border-solid border-gray-200">
            <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
              <b className="relative leading-[22px] inline-block min-w-[84px]">
                Fri, JUN 28
              </b>
            </div>
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-base-4">
              <div className="relative leading-[22px] inline-block min-w-[107px]">
                X Games 2024
              </div>
            </div>
            <div className="w-[1487.6px] shrink-0 flex flex-row items-start justify-start gap-[28.7px] max-w-[calc(100%_-_220px)] text-right text-base">
              <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[753px] max-w-full">
                <div className="self-stretch relative leading-[22px]">
                  Ventura, CA
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
          <HorizontalBorder
            friJUN7="Sun, SEP 1"
            draisRooftopNightclub="Washington State Fair 2024"
            lasVegasNV="Puyallup, WA"
            propMinWidth="84.4px"
            propWidth="1396px"
            propMinWidth1="694px"
          />
          <div className="w-[1720px] box-border overflow-x-auto flex flex-row items-start justify-start pt-[19px] px-1.5 pb-2.5 gap-[14.6px] border-t-[1px] border-solid border-gray-200">
            <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
              <b className="relative leading-[22px] inline-block min-w-[84.4px]">
                Sun, SEP 8
              </b>
            </div>
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-mini-9">
              <div className="relative leading-[22px]">
                Sudden Little Thrills 2024
              </div>
            </div>
            <div className="w-[1413.5px] shrink-0 flex flex-row items-start justify-start gap-[28.8px] max-w-[calc(100%_-_294px)] text-right">
              <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[705px] max-w-full">
                <div className="self-stretch relative leading-[22px]">
                  Pittsburgh, PA
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
          <div className="w-[1720px] box-border overflow-x-auto flex flex-row items-start justify-start pt-[19px] px-1.5 pb-2.5 gap-[14.8px] text-base-5 border-t-[1px] border-solid border-gray-200">
            <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
              <b className="relative leading-[22px] inline-block min-w-[81.1px]">
                Sat, OCT 5
              </b>
            </div>
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-base-4">
              <div className="relative leading-[22px]">
                Reggae Rise Up Las Vegas 2024
              </div>
            </div>
            <div className="w-[1360.4px] shrink-0 flex flex-row items-start justify-start gap-[28.7px] max-w-[calc(100%_-_348px)] text-right text-base">
              <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[671px] max-w-full">
                <div className="self-stretch relative leading-[22px]">
                  Las Vegas, NV
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
        </div>
      </div>
      <img
        className="ml-[-9.600000000000025px] self-stretch relative max-w-full overflow-hidden max-h-full z-[5] mt-[-136.4px]"
        alt=""
        src="/svg-8.svg"
      />
    </section>
  );
};

export default FrameComponent1;
