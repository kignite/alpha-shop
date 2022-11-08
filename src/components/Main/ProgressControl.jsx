import { ReactComponent as RightArrow } from "../../icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../icons/left-arrow.svg";

export default function ProgressControl({ dataPhase }) {
  return (
    <section className="buttonGroup">
      <button className="next">
        下一步
        <RightArrow />
      </button>
      {/* <button className="prev">        
        上一步
        <LeftArrow />
      </button> */}
      {/* <button className="next">
        <p>下一步</p>
        <RightArrow fill="#800000"/>
      </button> */}
      {/* <button className="prev">
        上一步
        <LeftArrow fill="#800000"/>
      </button> */}
      {/* <button className="next complete">
        確認下單
      </button> */}

    </section>
  );
}