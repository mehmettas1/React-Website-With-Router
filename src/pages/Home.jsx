const Home = () => {
  return(
    <main>
  <nav className="navbar">
    <div className="left-navbar">
      <h1>
        <span>Clarusway </span>Web Design
      </h1>
    </div>
    <div className="right-navbar">
      <ul className="nav-link ">
        <li>
          <a className="active" id="home" href="index.html">
            Home
          </a>{" "}
        </li>
        <li>
          <a id="about" href="about.html">
            About
          </a>{" "}
        </li>
        <li>
          <a id="services" href="services.html">
            Services
          </a>{" "}
        </li>
      </ul>
    </div>
  </nav>
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
  <section className="logo">
    <div className="box">
      <img src="./images/logo_html.png" alt="html_logo" />
      <h3>HTML5 Markup</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
        augue, viverra sit amet ultricies
      </p>
    </div>
    <div className="box">
      <img src="./images/logo_css.png" alt="css_logo" />
      <h3>CSS3 Styling</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
        augue, viverra sit amet ultricies
      </p>
    </div>
    <div className="box">
      <img src="./images/logo_brush.png" alt="graphic_logo" />
      <h3>Graphic Design</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
        augue, viverra sit amet ultricies
      </p>
    </div>
  </section>
  <footer>
    <p>Clarusway Web Design, Copyright © 2020</p>
    <img src="./images/clarusway_logo.png" alt="clarusway_logo" />
  </footer>
</main>

  );
};

export default Home;
