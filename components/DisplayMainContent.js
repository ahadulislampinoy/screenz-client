const DisplayMainContent = ({ content }) => {
  return (
    <section className="relative pt-[56.25%]">
      <iframe
        src={`https://www.2embed.to/embed/tmdb/movie?id=${content?.id}`}
        frameborder="0"
        width="100%"
        height="100%"
        style={{ position: "absolute", top: "0", left: "0" }}
        title={content.title || content.original_name}
        allow="fullscreen; picture-in-picture"
      ></iframe>
    </section>
  );
};

export default DisplayMainContent;
