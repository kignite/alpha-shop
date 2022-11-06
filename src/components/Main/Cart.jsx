export default function StepProgress() {
  return (
    <section className="stepProgress">
      <h2 className="registerTitle">結帳</h2>
      <div>
        <span className="done">
          <span className="text">1</span>
          <span className="progressLable">寄送地址</span>
        </span>
        <span>
          <span className="text">2</span>
          <span className="progressLable">運送方式</span>
        </span>
        <span>
          <span className="text">3</span>
          <span className="progressLable">付款資訊</span>
        </span>
      </div>
    </section>
  );
} 