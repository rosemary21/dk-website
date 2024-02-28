import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function DeliveryContainer() {
  return (
    <div className="w-full h-[500px] px-8 md:px-20 py-[3rem]">
      <div className="w-full rounded-[40px] grid md:grid-cols-4 md:grid-rows-2 grid-cols-2 grid-rows-3 shadow-lg">
        <div className="col-span-2 bg-white py-5 px-6">
          <h1 className="text-[#090914] md:text-[30px] text-[22px] font-semibold font-poppins">
            Delivering the best fashion outfit
          </h1>
          <span className="text-[#52525B] md:text-[14px] text-[12px] font-poppins">
            We believe in a world where you have total freedom to be you,
            without judgement. To experiment. To express yourself. To be brave
            and grab life as the extraordinary adventure it is.{" "}
          </span>
        </div>
        <div className="delivery-box box-2">
          <div>
            <h2>Red Quality Joggers</h2>
            <span>Unsex Red joggers</span>
          </div>
        </div>
        <div className="delivery-box box-2">
          <div>
            <h2>T-Shirt High-Quality</h2>
            <span>Lapel Polo Shirt M-5XL Blue</span>
          </div>
        </div>
        <div className="box-4">
          <Link to="/" className="box-4-group">
            Our Store
            <MdOutlineArrowOutward />
          </Link>
        </div>
        <div className="delivery-box box-2">
          <div>
            <h2>Top Quality Joggers Pant</h2>
            <span>Black With White Stripes</span>
          </div>
        </div>
        <div className="delivery-box box-2">
          <div>
            <h2>SMART CONTOUR DESIGN</h2>
            <span>MEN/Women(man- Kneel)</span>
          </div>
        </div>
        <div className="delivery-box box-2">
          <div>
            <h2>Round Neck Collection</h2>
            <span>MEN/Women(man- Kneel)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
