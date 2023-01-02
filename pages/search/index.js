import { getSession } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";
import Header from "../../components/Header";

const Search = () => {
  const [type, setType] = useState("movie");
  const [search, setSearch] = useState("");
  const [content, setContent] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/search/${type}?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=fall&page=1&include_adult=false`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setContent(data));
  // }, [type, search]);

  // console.log("c", content, "t", type, "s", search)
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
            onChange={(e) => setSearch(e.target.value)}
            className="form-input p-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:leading-5 bg-gray-700"
            placeholder="Search..."
          />
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
