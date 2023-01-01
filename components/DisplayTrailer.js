import ReactPlayer from "react-player/youtube";

const DisplayTrailer = ({ showTrailer, trailer }) => {
  const index = trailer?.videos?.results.findIndex((e) => e.type === "Trailer");

  return (
    <section className="relative pt-[56.25%]">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${trailer.videos?.results[index]?.key}`}
        width="100%"
        height="100%"
        style={{ position: "absolute", top: "0", left: "0" }}
        controls={true}
        playing={showTrailer}
      />
    </section>
  );
};

export default DisplayTrailer;
