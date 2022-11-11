import "./StepProgress.scss"

export default function StepProgress(page, setPage) {
  // console.log(page.page)
  return (
    <section className="stepProgress">
      <h2 className="registerTitle">結帳</h2>
      <div>
        {page.page === 1 ?
          <span className="done">
            <span className="text">1</span>
            <span className="progressLable">寄送地址</span>
          </span> :
          <span>
            <span className="text">1</span>
            <span className="progressLable">寄送地址</span>
          </span>
        }
        {page.page === 2 ?
          <span className="done">
            <span className="text">2</span>
            <span className="progressLable">運送方式</span>
          </span> :
          <span  >
            <span className="text">2</span>
            <span className="progressLable">運送方式</span>
          </span>}
        {page.page === 3 ?
          <span className="done" >
            <span className="text">3</span>
            <span className="progressLable">付款資訊</span>
          </span> :
          <span >
            <span className="text">3</span>
            <span className="progressLable">付款資訊</span>
          </span>}

      </div>
    </section>
  );
} 