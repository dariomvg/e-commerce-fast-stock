import "@/styles/loader.css";

export const Loader = () => {
  return (
    <section className="loader">
      <div className="dots-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <p className="title-loader">Loading products...</p>
    </section>
  );
};
