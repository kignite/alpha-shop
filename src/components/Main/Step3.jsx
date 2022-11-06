export default function Step3() {
  return (
    <section className="stepThree">
      <h3 className="formTitle">付款資訊</h3>
      <div className="stepoOneContainer">
        <div className="formItem formVisaName">
          <div className="inputLabel">持卡人姓名</div>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="formItem formVisaNumber">
          <div className="inputLabel">卡號</div>
          <input type="text" placeholder="1111 2222 3333 4444" />
        </div>
        <div className="formItem formVisaEXP">
          <div className="inputLabel">有效期限</div>
          <input type="text" placeholder="MM/YY" />
        </div>
        <div className="formItem formVisaCVCCCV">
          <div className="inputLabel">CVC/CCV</div>
          <input type="text" placeholder="123" />
        </div>
      </div>
    </section>
  )
}