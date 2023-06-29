
import "./Delimiter.scss";
import coffee from "../../svg/coffee.svg"

export const Delimiter = () => {


  return (

      <div className="Delimiter">
    <div className="Delimiter_line"></div>
    <img className="Delimiter_coffee" width={30} src={coffee} alt="" />
    <div className="Delimiter_line"></div>
      </div>

  );
};

