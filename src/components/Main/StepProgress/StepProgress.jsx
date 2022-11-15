import "./StepProgress.scss"

export default function StepProgress({ page }) {
  return (
    <section className="stepProgress">
      <h2 className="registerTitle">結帳</h2>
      <div>

        <span className={page === 1 ? "done step1" : "step1"}>
          <span className="text">1</span>
          <span className="progressLable">寄送地址</span>
        </span>

        <span className={page === 2 ? "done step2" : "step2"}>
          <span className="text">2</span>
          <span className="progressLable">運送方式</span>
        </span>

        <span className={page === 3 ? "done step3" : "step3"} >
          <span className="text">3</span>
          <span className="progressLable">付款資訊</span>
        </span>

      </div>
    </section>
  );
} 