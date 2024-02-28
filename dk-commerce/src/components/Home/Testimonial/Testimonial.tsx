import { testimonials } from "../../../data/Home";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

export default function Testimonial() {
  return (
    <div className="w-full px-8 md:px-20 my-[4rem] grid md:grid-cols-3 grid-cols-1 gap-5">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </div>
  );
}
