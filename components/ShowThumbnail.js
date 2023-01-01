import Image from "next/image";
import { useRouter } from "next/router";

const ShowThumbnail = ({ show }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();

  return (
    <section
      className="flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:max-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
      onClick={() => router.push(`/show/${show.id}`)}
    >
      <Image
        src={`${BASE_URL}${show.backdrop_path || show.poster_path}`}
        width={330}
        height={210}
        className="rounded-lg h-full object-cover"
        alt="Show Thumbnail"
      />
    </section>
  );
};

export default ShowThumbnail;