import { getSession } from "next-auth/react";
import Head from "next/head";
import Header from "../../components/Header";
import MovieThumbnail from "../../components/MovieThumbnail";

const Movie = ({ movies }) => {
  return (
    <section>
      <Head>
        <title>Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 space-y-2 my-10 px-8 mx-auto">
        {movies.results.map((movie) => (
          <MovieThumbnail key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Movie;
export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  const { id } = context.query;
  const movies = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US`
  ).then((res) => res.json());

  return {
    props: {
      session,
      movies,
    },
  };
};
