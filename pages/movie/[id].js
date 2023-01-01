import { XMarkIcon } from "@heroicons/react/24/solid";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import DisplayMainContent from "../../components/DisplayMainContent";
import DisplayTrailer from "../../components/DisplayTrailer";
import Header from "../../components/Header";

const Movie = ({ movie }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [showTrailer, setShowTrailer] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const typeMovie = true;

  return (
    <section>
      <Head>
        <title>{movie.title || movie.original_name}</title>
      </Head>
      <Header />
      <div className="relative z-50">
        <div className="relative min-h-[calc(100vh-72px)]">
          <Image
            src={
              `${BASE_URL}${movie.backdrop_path}` ||
              `${BASE_URL}${movie.poster_path}`
            }
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {movie.title || movie.original_name}
          </h1>
          <div className="flex items-center space-x-3 md:space-x-5">
            <button
              className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
              onClick={() => setShowMainContent(true)}
            >
              <img
                src="/images/play-icon-black.svg"
                alt=""
                className="h-6 md:h-8"
              />
              <span className="uppercase font-medium tracking-wide">Play</span>
            </button>

            <button
              className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
              onClick={() => setShowTrailer(true)}
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
            {movie.release_date || movie.first_air_date} •{" "}
            {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m •{" "}
            {movie.genres.map((genre) => genre.name + " ")}{" "}
          </p>
          <h4 className="text-sm md:text-lg max-w-4xl">{movie.overview}</h4>
        </div>

        {/* Bg Overlay */}
        {(showTrailer || showMainContent) && (
          <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"></div>
        )}

        <div
          className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
            showTrailer || showMainContent ? "block z-50" : "hidden"
          }`}
        >
          <div className="flex items-center justify-between bg-[#040714] text-[#f9f9f9] p-3.5">
            <span className="font-semibold px-2">
              Playing - {movie.title || movie.original_name}
            </span>
            <div
              className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
              onClick={() => {
                setShowTrailer(false), setShowMainContent(false);
              }}
            >
              <XMarkIcon className="h-5" />
            </div>
          </div>
          <div className="pb-4">
            {showTrailer && (
              <DisplayTrailer
                typeMovie={typeMovie}
                showTrailer={showTrailer}
                trailer={movie}
              />
            )}
            {showMainContent && (
              <DisplayMainContent typeMovie={typeMovie} content={movie} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  const { id } = context.query;
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=videos`
  ).then((res) => res.json());

  return {
    props: {
      session,
      movie,
    },
  };
};
