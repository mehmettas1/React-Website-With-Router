const Home = () => {
  return(
    <div>
      <main>
      <section className="banner">
    <p id="name">Professional Web Design</p>
    <p id="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu luctus
      ipsum, rhoncus semper magna. Nulla nec magna sit amet sem interdum
      condimentum.
    </p>
  </section>
  <section className="subscribe">
    <div id="newsletter">
      <p>Subscribe To Our Newsletter</p>
    </div>
    <div>
      <form action="#">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email..."
        />
        <button type="submit" id="submit">
          Subscribe
        </button>
      </form>
    </div>
  </section>
      </main>
    </div>
  );
};

export default Home;
