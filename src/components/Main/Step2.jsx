export default function Step2() {
  return (
    <section className="stepTwo">
      <h3 className="formTitle">運送方式</h3>
      <div className="stepoTwoContainer">
        <div className="shippingRadio">
          <input type="radio" name="shipping" defaultChecked={true} />
          <div className="radioInfo">
            <div className="shippingTitle">標準配送</div>
            <div className="shippingPrice">免費</div>
            <div className="shippingPeriod">約 3~7 個標準工作天</div>
          </div>
        </div>
        <div className="shippingRadio">
          <input type="radio" name="shipping" />
          <div className="radioInfo">
            <div className="shippingTitle">DHL 貨運</div>
            <div className="shippingPrice">$500</div>
            <div className="shippingPeriod">48小時內送達</div>
          </div>
        </div>
      </div>

    </section>
  )
}