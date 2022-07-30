import htmllogo from "../assets/img/logo_html.png"
import brushlogo from "../assets/img/logo_brush.png"
import csslogo from "../assets/img/logo_css.png"
import { useNavigate } from "react-router-dom";
import {info} from "../assets/data";
import Subscribe from "../components/Subscribe";

const Home = () => {
  const navigate = useNavigate();
  console.log(info);
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
  <Subscribe/>
  <section class="logo">
            <div class="box" onClick={()=>navigate("/html",{state:info[0].htmlInfo})} >
                <img src={htmllogo} alt="html_logo"/>
                <h3>HTML5 Markup</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                </p>
            </div>
            <div class="box"onClick={()=>navigate("/css",{state:info[1].cssInfo})}>
                <img src={csslogo} alt="css_logo"/>
                <h3>CSS3 Styling</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                </p>
            </div>
            <div class="box"onClick={()=>navigate("/logo",{state:info[2].logoInfo})}>
                <img src= {brushlogo} alt="graphic_logo"/>
                <h3>Graphic Design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies
                </p>
            </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
