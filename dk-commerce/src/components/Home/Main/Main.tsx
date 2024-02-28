import HomeNavbar from "../HomeNavbar/HomeNavbar";
import Title from "../../../assets/technology-art-fashion-title.png";
import RoundLogo from "../../../assets/dkerulative-round-logo.png";
import PlayBg from "../../../assets/play-background.png";
import PlayVector from "../../../assets//play-vector.png";

export default function Main() {
  return (
    <main className="w-[100vw] h-[100vh] bg-homeBgImg bg-cover bg-center bg-no-repeat overflow-hidden">
      <HomeNavbar />

      <div className="w-full h-[90vh] flex flex-col justify-center">
        <div className="w-full flex items-center px-10 md:px-20 justify-between">
          <img
            src={Title}
            alt="title"
            loading="lazy"
            className="md:w-[50%] w-[100%]  h-fit object-cover"
            data-aos="fade-right"
            data-aos-duration="1000"
          />

          <img
            src={RoundLogo}
            alt="round logo"
            loading="lazy"
            className="hidden md:flex animate-spinSlow w-[16%]"
          />
        </div>

        <div className="w-full md:w-[80%] flex items-center px-10 md:px-20 gap-4 mt-[25px]">
          <div
            className="md:w-[90px] w-[60px] md:h-[90px] h-[60px] relative"
            data-aos="fade-up"
          >
            <img
              src={PlayBg}
              className="w-full h-full object-cover rounded-full md:p-3 p-2 border-[1px] border-[#EA0C0F]"
              alt="red play background"
            />
            <img
              src={PlayVector}
              className="w-[15%] absolute top-[44%] left-[44%]"
              alt="play icon"
            />
          </div>
          <p
            className="text-white md:text-[16px] text-[13px] font-archivo w-[80%] md:w-[60%]"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            Where technology meets art and fashion. Explore technological
            knowledge, stunning art and trendy clothes.
          </p>
        </div>
      </div>
    </main>
  );
}
