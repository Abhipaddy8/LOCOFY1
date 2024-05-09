const Section = () => {
  return (
    <section className="self-stretch h-[1069px] relative [background:linear-gradient(70.12deg,_#6d187e_24%,_#005791_82%)] overflow-hidden shrink-0 max-w-full text-left text-38xl text-gray-100 font-source-serif-pro">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full max-h-full flex items-center justify-center">
        <img
          className="h-full w-full overflow-hidden object-contain absolute left-[0px] top-[0px] [transform:scale(1.094)]"
          alt=""
          src="/blur@2x.png"
        />
      </div>
      <img
        className="absolute h-[94.31%] w-[52.51%] top-[7.11%] right-[0.56%] bottom-[-1.42%] left-[46.93%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/you--single-art-3000x3000-01cc48f7228942c7840149f2ca1a9e57jpg@2x.png"
      />
      <div className="absolute top-[625.4px] left-[96px] rounded-lg [background:linear-gradient(77.76deg,_#6d187e_24%,_#005791_82%)] w-[129.3px] h-[43.2px] z-[1]" />
      <div className="absolute top-[496.6px] left-[90px] w-[769.6px] flex flex-col items-start justify-start gap-[20.4px] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[5.7px] leading-[62.72px] uppercase font-normal font-inherit z-[1] mq925:text-27xl mq925:leading-[50px] mq450:text-15xl mq450:leading-[38px]">
          You ft. Ty Dolla $ign
        </h1>
        <div className="relative text-base leading-[19.2px] inline-block min-w-[75px] z-[1]">
          OUT NOW
        </div>
        <button className="cursor-pointer [border:none] pt-[11.9px] pb-[12.1px] pr-[15.8px] pl-4 bg-gray-100 w-[129.3px] shadow-[0px_0px_0px_2px_#fafafa_inset] rounded-lg overflow-hidden flex flex-row items-start justify-start box-border whitespace-nowrap z-[2] hover:bg-gainsboro">
          <div className="flex-1 relative text-base leading-[19.2px] uppercase font-source-serif-pro text-steelblue text-center inline-block min-w-[97.5px]">
            Listen Now
          </div>
        </button>
      </div>
    </section>
  );
};

export default Section;
