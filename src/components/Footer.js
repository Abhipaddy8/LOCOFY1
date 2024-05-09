const Footer = () => {
  return (
    <footer className="self-stretch bg-steelblue flex flex-col items-start justify-start pt-[127.2px] pb-[68.6px] pr-[353px] pl-[515px] box-border gap-[64px] shrink-0 [debug_commit:1de1738] max-w-full text-left text-7xl-9 text-gray-100 font-source-serif-pro mq925:gap-[16px] mq925:pt-[83px] mq925:pb-[45px] mq925:pr-[88px] mq925:pl-32 mq925:box-border mq1350:gap-[32px] mq1350:pl-[257px] mq1350:pr-44 mq1350:box-border">
      <div className="w-[890px] flex flex-col items-start justify-start gap-[20.8px] max-w-full">
        <div className="w-[458.4px] relative tracking-[2.69px] leading-[29.6px] uppercase flex items-center max-w-full mq450:text-3xl mq450:leading-[24px]">
          Sign up to our newsletter
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px] max-w-full">
          <input
            className="w-full [border:none] [outline:none] bg-steelblue h-[43.2px] flex-1 shadow-[0px_0px_0px_2px_#fafafa_inset] rounded-lg overflow-hidden flex flex-row items-start justify-start pt-[13px] px-4 pb-[13.2px] box-border font-source-serif-pro text-mini-5 text-gray-100 min-w-[300px] max-w-full"
            placeholder="email@example.com"
            type="text"
          />
          <div className="w-[119.1px] flex flex-row items-start justify-start relative">
            <div className="h-full w-full absolute !m-[0] right-[-6px] bottom-[-6px] rounded-lg [background:linear-gradient(76.75deg,_#6d187e_24%,_#005791_82%)]" />
            <button className="cursor-pointer [border:none] pt-[11.9px] pb-[12.1px] pr-[15.8px] pl-4 bg-gray-100 flex-1 shadow-[0px_0px_0px_2px_#fafafa_inset] rounded-lg overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-gainsboro">
              <div className="flex-1 relative text-base leading-[19.2px] uppercase font-source-serif-pro text-steelblue text-center inline-block min-w-[87.3px]">
                Subscribe
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end max-w-full text-center text-sm-6">
        <div className="w-[971.4px] flex flex-col items-start justify-start gap-[39.4px] max-w-full mq925:gap-[20px]">
          <div className="w-[729.4px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <img
              className="h-[74px] w-60 relative overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/link--wiz-khalifa-straight-logo-white-ed170b91b58a4ae2b32ff657eca87e48png@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq925:flex-wrap mq925:justify-center">
            <div className="w-[123px] relative leading-[17.11px] flex items-center justify-center shrink-0 min-w-[123px]">
              © 2024, Wiz Khalifa.
            </div>
            <div className="w-[148.6px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-end justify-start gap-[7.8px]">
                <div className="flex-1 relative leading-[17.11px] inline-block min-w-[128.8px] shrink-0 [debug_commit:1de1738]">
                  United States (USD $)
                </div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                  <img
                    className="w-3 h-3 relative shrink-0 [debug_commit:1de1738]"
                    alt=""
                    src="/svg-13.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
