import Image from "next/image";
import { useRouter } from "next/router";
import notFoundImg from "../public/images/not-found.svg";

const ShowThumbnail = ({ show }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();

  return (
    <section
      className="relative min-w-[250px] min-h-[170px] md:min-h-[24rem] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-[1.01] transition duration-300"
      onClick={() => router.push(`/show/${show.id}`)}
    >
      <Image
        alt=""
        src={
          show?.poster_path || show?.backdrop_path
            ? `${BASE_URL}${show?.poster_path || show?.backdrop_path}`
            : notFoundImg
        }
        width={310}
        height={210}
        className="rounded-lg md:h-96 w-full object-cover"
        alt="Show Thumbnail"
      />
      <div className="absolute bottom-0 left-0 bg-gradient-to-t from-[#000] to-transparent w-full h-2/5">
        <div className="absolute bottom-0 left-0 p-2 py-3 text-center w-full">
          <h2 className="text-[#f9f9f9] text-xl font-semibold">
            {show?.title || show?.original_name}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ShowThumbnail;
