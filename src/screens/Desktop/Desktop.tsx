/* Navigation links data */
const navLinks = [
  { label: "НАПРАВЛЕНИЯ", href: "#" },
  { label: "РАСПИСАНИЕ", href: "#" },
  { label: "О НАС", href: "#" },
  { label: "КОНТАКТЫ", href: "#" },
];

/* Stats data */
const stats = [
  { value: "10+", label: "DIFFERENT\nDANCE STYLES" },
  { value: "50+", label: "CLASSES\nPAR WEEK" },
  { value: "100+", label: "HAPPY\nPARTICIPANTS" },
];

/* Carousel dots data - 6 dots, 3rd is active */
const carouselDots = [
  { active: false },
  { active: false },
  { active: true },
  { active: false },
  { active: false },
  { active: false },
];

/* Style cards data */
const styleCards = [
  {
    image: "https://drive.google.com/file/d/1hXkKwXk0tPCUKAXdpxOsP5oqacHLDHIL/view?usp=sharing",
    label: "POLE DANCE",
    description:
      "learn spins, tricks and graceful combos while building full‑body power and confidence.",
    overlayText: "PUT THE VIDEO",
    overlayBg: "/rectangle-116.svg",
    width: "w-[188px]",
    rounded: "rounded-[14px]",
    border: "border-[3px] border-solid border-[#6d7cec]",
  },
  {
    image: "/rectangle-113.png",
    label: "POLE DANCE",
    description:
      "learn spins, tricks and graceful combos while building full‑body power and confidence.",
    overlayText: "PUT THE VIDEO",
    overlayBg: "/rectangle-114.svg",
    width: "w-[353px]",
    rounded: "",
    border: "",
  },
  {
    image: "/rectangle-105.png",
    label: "POLE DANCE",
    description:
      "learn spins, tricks and graceful combos while building full‑body power and confidence.",
    overlayText: "PUT THE VIDEO",
    overlayBg: "/rectangle-110.svg",
    width: "w-[353px]",
    rounded: "",
    border: "",
  },
  {
    image: "/rectangle-111.png",
    label: "POLE DANCE",
    description:
      "learn spins, tricks and graceful combos while building full‑body power and confidence.",
    overlayText: "",
    overlayBg: "/rectangle-112.svg",
    width: "w-[353px]",
    rounded: "rounded-[14px]",
    border: "border-[3px] border-solid border-[#6d7cec]",
  },
];

/* Footer columns data */
const footerColumns = [
  {
    title: "КОНТАКТЫ",
    items: [],
  },
  {
    title: "НАПРАВЛЕНИЯ",
    items: ["НАПРАВЛЕНИЯ", "НАПРАВЛЕНИЯ", "НАПРАВЛЕНИЯ"],
  },
  {
    title: "О НАС",
    items: [],
  },
];

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] relative">
      {/* ── NAVIGATION BAR ── */}
      <header className="w-full h-[108px] bg-white flex items-center px-0 relative z-10">
        {/* Logo */}
        <div className="absolute top-[5px] left-[45px] w-[156px] bg-[linear-gradient(65deg,rgba(160,168,255,1)_0%,rgba(107,96,229,1)_97%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo-Regular',Helvetica] font-normal text-transparent text-[80px] tracking-[1.60px] leading-[96.0px]">
          MG
        </div>

        {/* Nav links */}
        <nav className="absolute top-[50px] left-[425px] flex gap-0">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`[font-family:'Baloo_2',Helvetica] text-[#140d48] text-xl tracking-[0.40px] leading-[24.0px] font-normal whitespace-nowrap ${
                i === 0
                  ? "mr-[45px]"
                  : i === 1
                    ? "mr-[45px]"
                    : i === 2
                      ? "mr-[231px]"
                      : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Book Now button */}
        <div className="absolute top-[22px] left-[1198px] w-[179px] h-16 rounded-[55px] bg-[linear-gradient(162deg,rgba(131,142,250,1)_0%,rgba(96,113,229,1)_100%)] flex items-center justify-center">
          <a
            className="text-[26px] tracking-[0.52px] leading-[31.2px] underline bg-[linear-gradient(179deg,rgba(255,255,255,1)_0%,rgba(226,232,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo-Regular',Helvetica] font-normal text-transparent whitespace-nowrap"
            href="https://mobifitness.ru/widget/demo/rasp/508250"
            rel="noopener noreferrer"
            target="_blank"
          >
            BOOK NOW
          </a>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[1027px]">
        {/* Gray background */}
        <div className="absolute top-0 left-[5px] w-[1440px] h-[1027px] bg-[#d9d9d9] border-[5px] border-solid border-black" />

        {/* Hero image */}
        <img
          className="absolute top-0 left-[694px] w-[710px] h-[1032px] object-cover"
          alt="Image"
          src="/image-3.png"
        />

        {/* DANCE STUDIO heading */}
        <div className="absolute top-[409px] left-[calc(50.00%_-_633px)] bg-[linear-gradient(152deg,rgba(131,142,250,1)_0%,rgba(96,113,229,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo-Regular',Helvetica] font-normal text-transparent text-5xl tracking-[0.96px] leading-[57.6px] whitespace-nowrap">
          DANCE STUDIO
        </div>

        {/* Subtitle */}
        <div className="absolute top-[636px] left-[85px] w-[645px] [font-family:'Baloo_2',Helvetica] font-normal text-[#6071e5] text-[32px] tracking-[0.64px] leading-[38.4px]">
          POLE DANCE, AERIAL ARTS, STRETCHING <br />
          &amp; DANCE FITNESS IN THE HEART OF LARNACA
        </div>

        {/* Choose Your Class button */}
        <div className="absolute top-[819px] left-[85px] w-[395px] h-[89px]">
          <div className="absolute top-0 left-0 w-[393px] h-[89px] rounded-[59px] bg-[linear-gradient(162deg,rgba(131,142,250,1)_0%,rgba(96,113,229,1)_100%)]" />
          <a
            className="absolute top-7 left-[calc(50.00%_-_159px)] bg-[linear-gradient(179deg,rgba(255,255,255,1)_0%,rgba(226,232,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo-Regular',Helvetica] font-normal text-transparent text-[32px] tracking-[0.64px] leading-[38.4px] underline whitespace-nowrap"
            href="https://mobifitness.ru/widget/demo/rasp/508250"
            rel="noopener noreferrer"
            target="_blank"
          >
            CHOOSE YOUR CLASS
          </a>
        </div>
      </section>

      {/* ── ABOUT / STATS SECTION ── */}
      <section className="relative w-full py-12 px-[85px]">
        {/* About text */}
        <div className="w-[1293px] [font-family:'Baloo_2',Helvetica] font-normal text-[#6071e5] text-2xl tracking-[0.48px] leading-[28.8px] mb-12">
          <span className="font-bold tracking-[0.12px]">MGOLD STUDIO</span>
          <span className="tracking-[0.12px]">
            {" "}
            IS DANCE AND MOVEMENT SPACE TO FEEL BETTER IN YOUR BODY AND FIND
            YOUR COMMUNITY IN THE HEART OF LARNACA. <br />
            WE OFFER A WIDE RANGE OF CLASSES – FROM POLE DANCE AND AERIAL ARTS
            TO STRETCHING, YOGA AND DANCE FITNESS – SO YOU CAN FIND THE STYLE
            THAT FITS YOUR PERSONALITY AND GOALS.
          </span>
        </div>

        {/* Stats row */}
        <div className="flex justify-between items-start w-full max-w-[1250px]">
          {/* 10+ */}
          <div className="flex flex-col gap-6 items-center w-[258px]">
            <div className="ml-[65px] w-[127px] h-24 bg-[linear-gradient(152deg,rgba(131,142,250,1)_0%,rgba(96,113,229,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo-Regular',Helvetica] text-transparent text-[80px] tracking-[1.60px] leading-[96.0px] font-normal whitespace-nowrap">
              10+
            </div>
            <div className="w-[254px] h-[87px] bg-[linear-gradient(152deg,rgba(131,142,250,1)_0%,rgba(96,113,229,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo_2',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0.72px] leading-[43.2px]">
              DIFFERENT <br />
              DANCE STYLES
            </div>
          </div>

          {/* 50+ */}
          <div className="flex flex-col gap-6 items-center w-[166px]">
            <div className="ml-3 w-[138px] h-24 bg-[linear-gradient(152deg,rgba(131,142,250,1)_0%,rgba(96,113,229,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo-Regular',Helvetica] text-transparent text-[80px] tracking-[1.60px] leading-[96.0px] font-normal whitespace-nowrap">
              50+
            </div>
            <div className="w-[162px] h-[86px] bg-[linear-gradient(152deg,rgba(131,142,250,1)_0%,rgba(96,113,229,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo_2',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0.72px] leading-[43.2px]">
              CLASSES <br />
              PAR WEEK
            </div>
          </div>

          {/* 100+ */}
          <div className="flex flex-col gap-6 items-center w-[243px]">
            <div className="ml-[42px] w-[177px] h-24 bg-[linear-gradient(152deg,rgba(131,142,250,1)_0%,rgba(96,113,229,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo-Regular',Helvetica] text-transparent text-[80px] tracking-[1.60px] leading-[96.0px] font-normal whitespace-nowrap">
              100+
            </div>
            <div className="w-[239px] h-[86px] bg-[linear-gradient(152deg,rgba(131,142,250,1)_0%,rgba(96,113,229,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo_2',Helvetica] font-normal text-transparent text-4xl text-center tracking-[0.72px] leading-[43.2px]">
              HAPPY
              <br /> PARTICIPANTS
            </div>
          </div>
        </div>
      </section>

      {/* ── FIND YOUR STYLE SECTION ── */}
      <section className="relative w-full pt-8 pb-16">
        {/* Section header */}
        <div className="flex items-center justify-between px-[85px] mb-8">
          <div className="bg-[linear-gradient(152deg,rgba(131,142,250,1)_0%,rgba(96,113,229,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo-Regular',Helvetica] font-normal text-transparent text-5xl tracking-[0.96px] leading-[57.6px] whitespace-nowrap">
            FIND YOUR STYLE
          </div>
          <div className="flex items-center gap-2">
            <span className="[font-family:'Baloo-Regular',Helvetica] font-normal text-[#7885f3] text-xl tracking-[0.40px] leading-[24.0px] whitespace-nowrap">
              FILTER
            </span>
            <img
              className="w-[34px] h-[15px]"
              alt="Vector"
              src="/vector-7.svg"
            />
          </div>
        </div>

        {/* Cards row */}
        <div className="relative w-full flex items-center">
          {/* Left arrow */}
          <div className="absolute left-[50px] z-10">
            <img
              className="w-[18px] h-[37px]"
              alt="Vector"
              src="/vector-5.svg"
            />
          </div>

          {/* Cards container */}
          <div
            className="flex gap-0 mx-auto overflow-hidden"
            style={{ width: "1300px" }}
          >
            {/* Card 1 - narrow */}
            <div className="relative w-[188px] h-[572px] flex-shrink-0 rounded-[14px] border-[3px] border-solid border-[#6d7cec] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Rectangle"
                src="/rectangle-115.png"
              />
              <div className="absolute bottom-0 left-0 w-full">
                <img
                  className="w-[344px] h-[118px]"
                  alt="Rectangle"
                  src="/rectangle-116.svg"
                />
                <div className="absolute top-[10px] left-[10px] bg-[linear-gradient(152deg,rgba(255,255,255,1)_0%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo-Regular',Helvetica] font-normal text-transparent text-xl tracking-[0.40px] leading-[24.0px] whitespace-nowrap">
                  POLE DANCE
                </div>
                <div className="absolute top-[34px] left-[10px] w-80 [font-family:'Noto_Sans',Helvetica] font-thin text-white text-xl tracking-[0.40px] leading-[24.0px]">
                  learn spins, tricks and graceful combos while building
                  full‑body power and confidence.
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-[353px] h-[572px] flex-shrink-0 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Rectangle"
                src="/rectangle-113.png"
              />
              <div className="absolute top-[204px] left-[12px] [font-family:'Baloo_2',Helvetica] font-bold text-black text-2xl tracking-[0.48px] leading-[28.8px] whitespace-nowrap">
                PUT THE VIDEO
              </div>
              <div className="absolute bottom-0 left-0 w-full">
                <img
                  className="w-[344px] h-[118px]"
                  alt="Rectangle"
                  src="/rectangle-114.svg"
                />
                <div className="absolute top-[10px] left-[12px] bg-[linear-gradient(152deg,rgba(255,255,255,1)_0%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo-Regular',Helvetica] font-normal text-transparent text-xl tracking-[0.40px] leading-[24.0px] whitespace-nowrap">
                  POLE DANCE
                </div>
                <div className="absolute top-[34px] left-[12px] w-80 [font-family:'Noto_Sans',Helvetica] font-thin text-white text-xl tracking-[0.40px] leading-[24.0px]">
                  learn spins, tricks and graceful combos while building
                  full‑body power and confidence.
                </div>
              </div>
            </div>

            {/* Card 3 - center/active */}
            <div className="relative w-[353px] h-[572px] flex-shrink-0 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Rectangle"
                src="/rectangle-105.png"
              />
              <div className="absolute top-[204px] left-[12px] [font-family:'Baloo_2',Helvetica] font-bold text-black text-2xl tracking-[0.48px] leading-[28.8px] whitespace-nowrap">
                PUT THE VIDEO
              </div>
              <div className="absolute bottom-0 left-0 w-full">
                <img
                  className="w-[344px] h-[118px]"
                  alt="Rectangle"
                  src="/rectangle-110.svg"
                />
                <div className="absolute top-[10px] left-[12px] bg-[linear-gradient(152deg,rgba(255,255,255,1)_0%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo-Regular',Helvetica] font-normal text-transparent text-xl tracking-[0.40px] leading-[24.0px] whitespace-nowrap">
                  POLE DANCE
                </div>
                <div className="absolute top-[34px] left-[12px] w-80 [font-family:'Noto_Sans',Helvetica] font-thin text-white text-xl tracking-[0.40px] leading-[24.0px]">
                  learn spins, tricks and graceful combos while building
                  full‑body power and confidence.
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative w-[353px] h-[572px] flex-shrink-0 rounded-[14px] border-[3px] border-solid border-[#6d7cec] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Rectangle"
                src="/rectangle-111.png"
              />
              <div className="absolute bottom-0 left-0 w-full">
                <img
                  className="w-[344px] h-[118px]"
                  alt="Rectangle"
                  src="/rectangle-112.svg"
                />
                <div className="absolute top-[10px] left-[12px] bg-[linear-gradient(152deg,rgba(255,255,255,1)_0%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo-Regular',Helvetica] font-normal text-transparent text-xl tracking-[0.40px] leading-[24.0px] whitespace-nowrap">
                  POLE DANCE
                </div>
                <div className="absolute top-[34px] left-[12px] w-80 [font-family:'Noto_Sans',Helvetica] font-thin text-white text-xl tracking-[0.40px] leading-[24.0px]">
                  learn spins, tricks and graceful combos while building
                  full‑body power and confidence.
                </div>
              </div>
            </div>
          </div>

          {/* Right arrow */}
          <div className="absolute right-[50px] z-10">
            <img
              className="w-[18px] h-[37px]"
              alt="Vector"
              src="/vector-6.svg"
            />
          </div>
        </div>

        {/* Carousel dots */}
        <div className="flex justify-center gap-3.5 mt-8">
          {carouselDots.map((dot, i) => (
            <div
              key={i}
              className={`w-[21px] h-[21px] rounded-[10.5px] ${dot.active ? "bg-[#838efa]" : "bg-[#c1c7ff]"}`}
            />
          ))}
        </div>
      </section>

      {/* ── COMMUNITY / VIDEO SECTION ── */}
      <section className="relative w-full h-[1027px] bg-[#e1e7ff]">
        {/* Community text */}
        <div className="absolute top-[273px] left-[120px] w-[544px] [font-family:'Baloo_2',Helvetica] font-bold text-[#6071e5] text-2xl tracking-[0.48px] leading-[28.8px]">
          TEXT HERE ABOUT AMBIANCE COMMUNITU AND BLABLABLA
        </div>

        {/* Dark video box */}
        <div className="absolute top-[161px] left-[901px] w-[420px] h-[661px] bg-[#2c2d33] border-[5px] border-solid border-[#715353]">
          {/* Circle placeholder */}
          <div className="absolute top-[300px] left-[171px] w-[77px] h-[77px] bg-[#d9d9d9] rounded-[38.5px]" />
          {/* VIDEO CONTENT label */}
          <div className="absolute bottom-[60px] left-[113px] [font-family:'Baloo-Regular',Helvetica] font-normal text-[#d9d9d9] text-[34px] tracking-[0.68px] leading-[40.8px]">
            VIDEO CONTENT
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM SECTION ── */}
      <section className="relative w-full h-[1027px] bg-[linear-gradient(138deg,rgba(124,102,228,1)_0%,rgba(211,205,241,1)_100%)]">
        {/* White card */}
        <div className="absolute top-[155px] left-[209px] w-[1008px] h-[668px] bg-white rounded-[36px]">
          {/* Title */}
          <div className="absolute top-[90px] left-[225px] bg-[linear-gradient(152deg,rgba(131,142,250,1)_0%,rgba(96,113,229,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo-Regular',Helvetica] font-normal text-transparent text-[34px] tracking-[0.68px] leading-[40.8px]">
            BOOK NOW AND GET BETTER PRICES
          </div>

          {/* Name field */}
          <div className="absolute top-[200px] left-[130px] w-[422px] h-[66px]">
            <div className="absolute top-0 left-0 w-[420px] h-[66px] rounded-[14px] border-2 border-solid border-[#9fa8ff]" />
            <div className="absolute top-[25px] left-[19px] w-[69px] [font-family:'Baloo_2',Helvetica] font-normal text-[#9fa8ffcc] text-[26px] tracking-[0.52px] leading-[31.2px] whitespace-nowrap">
              NAME
            </div>
          </div>

          {/* Phone field */}
          <div className="absolute top-[200px] left-[573px] w-[307px] h-[66px]">
            <div className="absolute top-0 left-0 w-[305px] h-[66px] rounded-[14px] border-2 border-solid border-[#9fa8ff]" />
            <div className="absolute top-6 left-3.5 w-[119px] [font-family:'Baloo_2',Helvetica] font-normal text-[#9fa8ffcc] text-[26px] tracking-[0.52px] leading-[31.2px] whitespace-nowrap">
              PHONE
            </div>
          </div>

          {/* Email field */}
          <div className="absolute top-[303px] left-[130px] w-[750px] h-[66px]">
            <div className="absolute top-0 left-0 w-[748px] h-[66px] rounded-[14px] border-2 border-solid border-[#9fa8ff]" />
            <div className="absolute top-[25px] left-[22px] w-[175px] [font-family:'Baloo_2',Helvetica] font-normal text-[#9fa8ffcc] text-[26px] tracking-[0.52px] leading-[31.2px] whitespace-nowrap">
              EMAIL
            </div>
          </div>

          {/* Select class field */}
          <div className="absolute top-[406px] left-[130px] w-[750px] h-[66px]">
            <div className="absolute top-0 left-0 w-[748px] h-[66px] rounded-[14px] border-2 border-solid border-[#9fa8ff]" />
            <div className="absolute top-[25px] left-[22px] w-[271px] [font-family:'Baloo_2',Helvetica] font-normal text-[#9fa8ffcc] text-[26px] tracking-[0.52px] leading-[31.2px] whitespace-nowrap">
              SELECT YOUR CLASS
            </div>
            <img
              className="absolute top-[26px] left-[712px] w-7 h-[13px]"
              alt="Vector"
              src="/vector-3.svg"
            />
          </div>

          {/* Book Class button */}
          <div className="absolute top-[540px] left-[361px] w-72 h-[65px]">
            <div className="absolute top-0 left-0 w-[286px] h-[65px] rounded-[59px] bg-[linear-gradient(162deg,rgba(131,142,250,1)_0%,rgba(96,113,229,1)_100%)]" />
            <div className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_95px)] w-[188px] text-[32px] tracking-[0.64px] leading-[38.4px] bg-[linear-gradient(179deg,rgba(255,255,255,1)_0%,rgba(226,232,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Baloo-Regular',Helvetica] font-normal text-transparent whitespace-nowrap">
              BOOK CLASS
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section className="relative w-full h-[399px]">
        <img
          className="w-full h-[399px] border-[5px] border-solid border-black object-cover"
          alt="Rectangle"
          src="/rectangle-9.png"
        />
        {/* Map icon */}
        <div className="absolute top-[94px] left-[638px] w-[51px] h-[57px] bg-[#f6f4f4]" />
        <img
          className="absolute top-[88px] left-[638px] w-[93px] h-[117px]"
          alt="Map icon"
          src="/map-icon.svg"
        />
        {/* Location link */}
        <a
          className="absolute top-[54px] left-[890px] [font-family:'Baloo_2',Helvetica] font-bold text-black text-2xl tracking-[0.48px] leading-[28.8px] underline whitespace-nowrap"
          href="https://www.google.com/maps/place/MGold+dance+studio/@34.9242702,33.626029,16z/data=!4m10!1m2!2m1!1spole+dance!3m6!1s0x14de29006ff80e67:0x2a17eca2645f61fd!8m2!3d34.9242461!4d33.6262057!15sCgpwb2xlIGRhbmNlWgwiCnBvbGUgZGFuY2WSAQpkYW5jZV9oYWxsmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ4YU1XRXhaRU5SZWtaUlpHdG9jbUZHU2xCa1YwNUxWR3hDUjFkclJSQULgAQD6AQQIPBA3!16s%2Fg%2F11ynzy6knd?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
          rel="noopener noreferrer"
          target="_blank"
        >
          LINK HERE FOR LOCATION
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative w-full h-[473px] bg-[linear-gradient(0deg,rgba(96,113,229,1)_0%,rgba(131,142,250,1)_100%)]">
        {/* Footer columns */}
        <div className="absolute top-[90px] left-0 w-full flex">
          {/* КОНТАКТЫ column */}
          <div className="absolute left-[194px]">
            <div className="[font-family:'Baloo-Regular',Helvetica] text-white text-[32px] tracking-[0.64px] leading-[38.4px] font-normal whitespace-nowrap">
              КОНТАКТЫ
            </div>
          </div>

          {/* НАПРАВЛЕНИЯ column */}
          <div className="absolute left-[546px] flex flex-col gap-0">
            <div className="[font-family:'Baloo-Regular',Helvetica] text-white text-[32px] tracking-[0.64px] leading-[38.4px] font-normal whitespace-nowrap">
              НАПРАВЛЕНИЯ
            </div>
            <div className="[font-family:'Baloo-Regular',Helvetica] text-white text-[32px] tracking-[0.64px] leading-[38.4px] font-normal whitespace-nowrap mt-[40px]">
              НАПРАВЛЕНИЯ
            </div>
            <div className="[font-family:'Baloo-Regular',Helvetica] text-white text-[32px] tracking-[0.64px] leading-[38.4px] font-normal whitespace-nowrap mt-[40px]">
              НАПРАВЛЕНИЯ
            </div>
            <div className="[font-family:'Baloo-Regular',Helvetica] text-white text-[32px] tracking-[0.64px] leading-[38.4px] font-normal whitespace-nowrap">
              НАПРАВЛЕНИЯ
            </div>
          </div>

          {/* О НАС column */}
          <div className="absolute left-[989px]">
            <div className="[font-family:'Baloo-Regular',Helvetica] text-white text-[32px] tracking-[0.64px] leading-[38.4px] font-normal whitespace-nowrap">
              О НАС
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
