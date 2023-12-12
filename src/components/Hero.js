export default function Hero(prop) {
  const { slogan, subSlogan } = prop;
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>{slogan}</h1>
        <p>{subSlogan}</p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
      </div>
    </section>
  );
}
