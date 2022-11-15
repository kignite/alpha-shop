import "./ProgressControl.scss"

import { ReactComponent as RightArrow } from "../../../icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../../icons/left-arrow.svg";
import { useContext } from "react";
import { Context } from "../../../Context";


export default function ProgressControl({ page, setPage }) {
  const { handleFormSubmit} = useContext(Context)
  function PrevBtn({ setPage }) {
    return (
      <button className="prev" onClick={() => setPage(page => page - 1)}>
        上一步
        <LeftArrow />
      </button>
    )
  }

  function NextBtn({ setPage }) {
    return (
      <button className="next" onClick={() => setPage(page => page + 1)}>
        下一步
        <RightArrow />
      </button>
    )
  }

  function CompleteBtn() {
    return (
      <button className="next" onClick={handleFormSubmit}>
        確認下單
      </button>
    )

  }
  return (
    <section className="buttonGroup">
      {page === 1 && <NextBtn  setPage={setPage} />}
      {page === 2 && <><PrevBtn setPage={setPage} /><NextBtn setPage={setPage} /></>}
      {page === 3 && <><PrevBtn setPage={setPage} /><CompleteBtn /></>}
    </section>
  );
}