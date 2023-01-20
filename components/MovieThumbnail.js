import Image from "next/image";
import { useRouter } from "next/router";
import notFoundImg from "../public/images/not-found.svg";

const MovieThumbnail = ({ movie }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  console.log(movie);
  return (
    <section
      className="relative rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-[1.01]  transition duration-300"
      onClick={() => router.push(`/movie/${movie?.id}`)}
    >
      <Image
        alt=""
        src={
          movie?.poster_path || movie?.backdrop_path
            ? `${BASE_URL}${movie?.poster_path || movie?.backdrop_path}`
            : notFoundImg
        }
        width={310}
        height={210}
        alt="Movie Thumbnail"
        className="rounded-lg h-full w-full object-cover select-none"
      />
      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-[#000] to-transparent w-full h-2/5">
        <div className="absolute bottom-0 left-0 p-2 py-3 text-center w-full">
          <h2 className="text-[#f9f9f9] text-xl font-semibold">
            {movie?.title || movie?.original_name}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MovieThumbnail;
