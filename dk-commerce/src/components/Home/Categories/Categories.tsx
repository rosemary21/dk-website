import { categories } from "../../../data/Home";
import CategoryCard from "../CategoryCard/CategoryCard";
import OverLayLeft from "../../../assets/home-left-overlay.png";
import OverLayRight from "../../../assets/home-right-overlay.png";

export default function Categories() {
  return (
    <div className="w-full my-[4rem] relative">
      <img
        src={OverLayLeft}
        className="absolute top-3 left-0 w-[150px] h-[270px]"
        alt="left overlay curve"
      />
      <img
        src={OverLayRight}
        className="absolute top-2 right-0 w-[230px] h-[390px]"
        alt="left overlay curve"
      />
      <h2
        className="text-center font-bold font-montserrat md:text-3xl text-[19px]"
        data-aos="fade-up"
        data-aos-once="true"
      >
        Explore Our Diverse Categories
      </h2>
      <p
        className="text-center font-montserrat md:text-base text-[14px] mt-3"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-once="true"
      >
        From Tech Solutions to Creative Expressions, D'kerulative Offers
        Something for Every Taste and Passion
      </p>

      <div className="mt-10 px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
}
