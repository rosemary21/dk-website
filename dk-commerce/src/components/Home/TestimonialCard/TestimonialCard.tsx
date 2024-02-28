interface Props {
  name: string;
  job: string;
  testimonial: string;
  aos: string;
}

export default function TestimonialCard({
  job,
  name,
  testimonial,
  aos,
}: Props) {
  return (
    <div data-aos={aos} data-aos-duration="700">
      <p className="text-[#090914] md:text-[15px] text-[13px] font-semibold font-poppins text-center">{`"${testimonial}"`}</p>
      <h3 className="text-center mt-5 text-[#090914] md:text-[15px] text-[13px] font-semibold font-poppins">
        {name}
      </h3>
      <p className="text-center mt-2 text-muted md:text-[15px] text-[13px] font-poppins">
        {job}
      </p>
    </div>
  );
}
