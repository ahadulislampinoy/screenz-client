import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieThumbnail from "./MovieThumbnail";

const MoviesCollection = ({ popularMovies }) => {
  return (
    <section className="space-y-2 my-10 px-8 mx-auto">
      <h2 className="font-semibold">Popular Movies</h2>
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
        {popularMovies.map((movie) => (
          <SwiperSlide>
            <MovieThumbnail key={movie.id} movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MoviesCollection;
