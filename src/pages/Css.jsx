import Card from "../components/Card";
import { useLocation } from "react-router-dom";


const Css = () => {
  const location = useLocation();
  const cssInfo = location.state;
  console.log(cssInfo);
  return (
    <div className="pages-height py-5">
      <Card {...cssInfo} />
    </div>
  )
};

export default Css;
