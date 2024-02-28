import VideoAdvert from "../../../assets/advert-video.mp4";

export default function VideoContainer() {
  return (
    <div className="md:mt-[10rem] mt:[5rem] px-8 md:px-20" data-aos="fade-up">
      <video src={VideoAdvert} autoPlay muted loop></video>
    </div>
  );
}
