import { useContext } from "react";
import { Context } from "../../../Context";
import "./Step3.scss"

export default function StepThree() {
  const { handleFormChange } = useContext(Context)
  return (
    <section className="stepThree">
      <h3 className="formTitle">付款資訊</h3>
      <div className="stepoOneContainer">
        <div className="formItem formVisaName">
          <div className="inputLabel">持卡人姓名</div>
          <input
            type="text"
            placeholder="John Doe"
            onChange={handleFormChange}
            name="visaName"
          />
        </div>
        <div className="formItem formVisaNumber">
          <div className="inputLabel">卡號</div>
          <input type="text"
            placeholder="1111 2222 3333 4444"
            onChange={handleFormChange}
            name="visaNumber"
          />
        </div>
        <div className="formItem formVisaEXP">
          <div className="inputLabel">有效期限</div>
          <input type="text"
            placeholder="MM/YY"
            onChange={handleFormChange}
            name="visaEXP"
          />
        </div>
        <div className="formItem formVisaCVCCCV">
          <div className="inputLabel">CVC/CCV</div>
          <input type="text"
            placeholder="123"
            onChange={handleFormChange}
            name="visaCVC"
          />
        </div>
      </div>
    </section>
  );
}
