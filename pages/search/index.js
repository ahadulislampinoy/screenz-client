import { getSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import MovieThumbnail from "../../components/MovieThumbnail";
import ShowThumbnail from "../../components/ShowThumbnail";

const Search = () => {
  const [type, setType] = useState("movie");
  const [query, setQuery] = useState("");
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (query.replaceAll(" ", "").length > 0) {
      fetch(
        `https://api.themoviedb.org/3/search/${type}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      )
        .then((res) => res.json())
        .then((data) => setContent(data.results));
    }
  }, [query, type]);
  return (
    <section>
      <Head>
        <title>Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="my-6">
        <ul className="flex gap-x-5 place-content-center">
          <li className="relative">
            <input
              className="sr-only peer"
              type="radio"
              value="movie"
              defaultChecked
              name="answer"
              onClick={() => setType("movie")}
              id="answer_yes"
            />
            <label
              className="flex py-3 px-5 bg-gray-700 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-600 peer-checked:ring-green-500 peer-checked:ring-2"
              htmlFor="answer_yes"
            >
              Movie
            </label>
          </li>
          <li className="relative">
            <input
              className="sr-only peer"
              type="radio"
              value="show"
              name="answer"
              onClick={() => setType("tv")}
              id="answer_no"
            />
            <label
              className="flex py-3 px-5 bg-gray-700 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-600 peer-checked:ring-green-500 peer-checked:ring-2"
              htmlFor="answer_no"
            >
              Show
            </label>
          </li>
        </ul>
        <div className="rounded-md shadow-sm px-14 py-7 ">
          <input
            type="search"
            onChange={(e) => setQuery(e.target.value)}
            className="form-input p-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:leading-5 bg-gray-700"
            placeholder="Search..."
          />
        </div>
        <div>
          {content.length === 0 && query.replaceAll(" ", "").length > 0 ? (
            <h1 className="text-2xl grid place-content-center h-screen text-white">
              No Results Found
            </h1>
          ) : (
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 space-y-2 my-10 px-8 mx-auto">
              {content.map((item) =>
                type === "movie" ? (
                  <MovieThumbnail key={item.id} movie={item} />
                ) : (
                  <ShowThumbnail key={item.id} show={item} />
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Search;
export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};
