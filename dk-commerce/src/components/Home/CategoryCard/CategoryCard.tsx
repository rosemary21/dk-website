interface Props {
  icon: string;
  title: string;
  description: string;
  translate: string;
  delay: string;
}

export default function CategoryCard({
  description,
  icon,
  title,
  translate,
  delay,
}: Props) {
  return (
    <>
      <div
        className={`bg-white shadow-xl px-4 py-7 rounded-[17px] md:flex hidden items-start gap-4 group transition-all duration-300 ${translate}`}
      >
        <img src={icon} alt={title} className="w-[80px] h-[70px]" />
        <div className="group-hover:text-primary transition-all duration-500">
          <h2 className="text-[23px] font-montserrat font-semibold">{title}</h2>
          <p className="text-[14px] font-poppins">{description}</p>
        </div>
      </div>

      <div
        className={`bg-white shadow-xl px-4 py-7 rounded-[17px] md:hidden flex items-start gap-4 group transition-all duration-300 translate-x-0`}
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <img src={icon} alt={title} className="w-[60px] h-[50px]" />
        <div className="group-hover:text-primary transition-all duration-500">
          <h2 className="text-[17px] font-montserrat font-semibold">{title}</h2>
          <p className="text-[11px] font-poppins">{description}</p>
        </div>
      </div>
    </>
  );
}
