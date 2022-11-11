import "./StepProgress.scss"

export default function StepProgress() {
  return (
    <section className="stepProgress">
      <h2 className="registerTitle">結帳</h2>
      <div>
        <span className="done" data-phase="1">
          <span className="text">1</span>
          <span className="progressLable">寄送地址</span>
        </span>
        <span data-phase="2" >
          <span className="text">2</span>
          <span className="progressLable">運送方式</span>
        </span>
        <span data-phase="3" >
          <span className="text">3</span>
          <span className="progressLable">付款資訊</span>
        </span>
      </div>
    </section>
  );
} 