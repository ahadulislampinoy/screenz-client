import Image from "next/image";

const Content = ({ content }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <section
      className="flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:max-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
      //   onClick={() => router.push(`/movie/${content.id}`)}
    >
      <Image
        src={`${BASE_URL}${content.backdrop_path || content.poster_path}`}
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg h-full"
      />
    </section>
  );
};

export default Content;
