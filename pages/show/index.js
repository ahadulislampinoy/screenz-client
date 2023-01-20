import { getSession } from "next-auth/react";
import Head from "next/head";
import Header from "../../components/Header";
import ShowThumbnail from "../../components/ShowThumbnail";

const Show = ({ shows }) => {
  return (
    <section>
      <Head>
        <title>Shows</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="grid  grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 space-y-2 my-10 px-8 mx-auto">
        {shows.results.map((show) => (
          <ShowThumbnail key={show.id} show={show} />
        ))}
      </div>
    </section>
  );
};

export default Show;
export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  const { id } = context.query;
  const shows = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
  ).then((res) => res.json());

  return {
    props: {
      session,
      shows,
    },
  };
};
