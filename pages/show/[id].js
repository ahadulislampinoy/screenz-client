import { XMarkIcon } from "@heroicons/react/24/solid";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import Header from "../../components/Header";

const Show = ({ show }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [showPlayer, setShowPlayer] = useState(false);

  const index = show?.videos?.results.findIndex((e) => e.type === "Trailer");

  return (
    <section>
      <Head>
        <title>{show.title || show.original_name}</title>
      </Head>
      <Header />
      <div className="relative z-50">
        <div className="relative min-h-[calc(100vh-72px)]">
          <Image
            src={
              `${BASE_URL}${show.backdrop_path || show.poster_path}` ||
              `${BASE_URL}${show.poster_path}`
            }
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {show.title || show.original_name}
          </h1>
          <div className="flex items-center space-x-3 md:space-x-5">
            <button className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
              <img
                src="/images/play-icon-black.svg"
                alt=""
                className="h-6 md:h-8"
              />
              <span className="uppercase font-medium tracking-wide">Play</span>
            </button>

            <button
              className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
              onClick={() => setShowPlayer(true)}
            >
              <img
                src="/images/play-icon-white.svg"
                alt=""
                className="h-6 md:h-8"
              />
              <span className="uppercase font-medium tracking-wide">
                Trailer
              </span>
            </button>
          </div>

          <p className="text-xs md:text-sm">
            {show.release_date || show.first_air_date} •{" "}
            {Math.floor(show.runtime / 60)}h {show.runtime % 60}m •{" "}
            {show.genres.map((genre) => genre.name + " ")}{" "}
          </p>
          <h4 className="text-sm md:text-lg max-w-4xl">{show.overview}</h4>
        </div>

        {/* Bg Overlay */}
        {showPlayer && (
          <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"></div>
        )}

        <div
          className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
            showPlayer ? "opacity-100 z-50" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-between bg-[#040714] text-[#f9f9f9] p-3.5">
            <span className="font-semibold px-2">Play Trailer</span>
            <div
              className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
              onClick={() => setShowPlayer(false)}
            >
              <XMarkIcon className="h-5" />
            </div>
          </div>
          <div className="pb-4">
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${show.videos?.results[index]?.key}`}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                controls={true}
                playing={showPlayer}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Show;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  const { id } = context.query;
  const show = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=videos`
  ).then((res) => res.json());

  return {
    props: {
      session,
      show,
    },
  };
};
