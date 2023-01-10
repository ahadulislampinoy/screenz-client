import { Swiper, SwiperSlide } from "swiper/react";
import ShowThumbnail from "./ShowThumbnail";

const ShowsCollection = ({ popularShows }) => {
  return (
    <section className="space-y-2 my-10 px-8 mx-auto">
      <h2 className="font-semibold">Popular Shows</h2>
      <Swiper
        spaceBetween={50}
        breakpoints={{
          640: {
            // width: 640,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 3,
          },
          1024: {
            // width: 1024,
            slidesPerView: 4,
          },
          1280: {
            // width: 1280,
            slidesPerView: 5,
          },
        }}
      >
        {popularShows.map((show, i) => (
          <SwiperSlide key={i}>
            <ShowThumbnail key={show.id} show={show} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ShowsCollection;
