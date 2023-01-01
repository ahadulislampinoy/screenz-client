import ShowThumbnail from "./ShowThumbnail";

const ShowsCollection = ({ popularShows }) => {
  return (
    <section className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold">Popular Shows</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
        {popularShows.map((show) => (
          <ShowThumbnail key={show.id} show={show} />
        ))}
      </div>
    </section>
  );
};

export default ShowsCollection;
