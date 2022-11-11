import "./ProgressControl.scss"

import { ReactComponent as RightArrow } from "../../../icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "../../../icons/left-arrow.svg";

export default function ProgressControl({ page, setPage }) {
  function PrevBtn({ page, setPage }) {
    return (
      <button className="prev" onClick={() => setPage(page => page - 1)}>
        上一步
        <LeftArrow />
      </button>
    )
  }

  function NextBtn({ page, setPage }) {
    return (
      <button className="next" onClick={() => setPage(page => page + 1)}>
        下一步
        <RightArrow />
      </button>
    )
  }

  function CompleteBtn() {
    return (
      <button className="next" onClick={() => setPage(page)}>
        確認下單
      </button>
    )

  }
  return (
    <section className="buttonGroup">
      {page === 1 && <NextBtn page={1} setPage={setPage} />}
      {page === 2 && <><PrevBtn page={2} setPage={setPage} /><NextBtn page={2} setPage={setPage} /></>}
      {page === 3 && <><PrevBtn page={3} setPage={setPage} /><CompleteBtn page={3} setPage={setPage} /></>}
    </section>
  );
}