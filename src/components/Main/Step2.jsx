const shippingData = [
  { title: "標準配送", price: "免費", period: "約 3~7個標準工作天" },
  { title: "DHL 貨運", price: "$500", period: "48小時內送達" },
]

function ShippingInfo(info) {
  return (
    <>
      {
        info.data.map(item =>
          <div className="shippingRadio">
            <input type="radio" name="shipping" defaultChecked={true} />
            <div className="shippingInfo">              
              <div className="shippingTitle">{item.title}</div>
              <div className="shippingPrice">{item.price}</div>
              <div className="shippingPeriod">{item.period}</div>
            </div>

          </div>

        )
      }
    </>

  )
}

export default function Step2() {
  return (
    <section className="stepTwo">
      <h3 className="formTitle">運送方式</h3>
      <div className="stepoTwoContainer">
        <ShippingInfo data={shippingData}/>
      </div>

    </section>
  )
}