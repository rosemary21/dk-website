import Categories from "../../components/Home/Categories/Categories";
import DeliveryContainer from "../../components/Home/DeliveryContainer/DeliveryContainer";
import Main from "../../components/Home/Main/Main";
import Testimonial from "../../components/Home/Testimonial/Testimonial";
import VideoContainer from "../../components/Home/VideoContainer/VideoContainer";

export default function Home() {
  return (
    <>
      <Main />
      <Categories />
      <VideoContainer />
      <Testimonial />
      <DeliveryContainer />
    </>
  );
}
