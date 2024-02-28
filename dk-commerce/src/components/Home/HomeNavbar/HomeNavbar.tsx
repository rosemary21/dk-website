import { Drawer, Image } from "@mantine/core";
import Logo from "../../../assets/logo.png";
import FallbackLogo from "../../../assets/fallback_logo.png";
import { homeNavbarData } from "../../../data/Home";
import { Link, useLocation } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useDisclosure } from "@mantine/hooks";

export default function HomeNavbar() {
  const [opened, { open, close }] = useDisclosure(false);
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <>
      <nav className="w-full h-[10vh] px-5 flex items-center justify-between md:px-10">
        <Link to="/" data-aos="fade-up" data-aos-duration="800">
          <Image
            src={Logo}
            fallbackSrc={FallbackLogo}
            className="w-[70px] h-[60px]"
          />
        </Link>

        <ul className="gap-5 hidden md:flex md:items-center">
          {homeNavbarData.map(({ id, path, title, delay }) => (
            <Link
              to={path}
              key={id}
              className={` transition-all duration-500 text-[15px] hover:text-primary font-montserrat ${
                pathname === path
                  ? "text-primary font-[600]"
                  : "text-white font-[400]"
              }`}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={delay}
            >
              {title}
            </Link>
          ))}
        </ul>

        <MdMenu
          className="text-white text-[30px] font-semibold flex md:hidden cursor-pointer"
          onClick={open}
        />
      </nav>

      <Drawer
        opened={opened}
        onClose={close}
        position="top"
        title={<h2 className="font-bold text-2xl">Menu</h2>}
        className="h-[50%]"
      >
        <ul className="gap-5 flex flex-col">
          {homeNavbarData.map(({ id, path, title, delay }) => (
            <Link
              to={path}
              key={id}
              className={`transition-all duration-500 hover:text-primary font-montserrat text-[15px] ${
                pathname === path ? "text-primary font-semibold" : "text-black"
              }`}
              data-aos="slide-right"
              data-aos-delay={delay}
            >
              {title}
            </Link>
          ))}
        </ul>
      </Drawer>
    </>
  );
}
