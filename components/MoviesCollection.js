import MovieThumbnail from "./MovieThumbnail";

const MoviesCollection = ({ popularMovies }) => {
  // console.log(popularMovies);

  return (
    <section className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold">Popular Movies</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
        {popularMovies.map((movie) => (
          <MovieThumbnail key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MoviesCollection;