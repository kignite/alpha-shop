import "./Step2.scss"

const shippingData = [
  { id: 0, title: "標準配送", price: 0, period: "約 3~7個標準工作天" },
  { id: 1, title: "DHL 貨運", price: 500, period: "48小時內送達" },
]

function PriceJudge({ price }) {
  return (
    <>
      {price === 0 ? "免費" : "$" + price}
    </>
  )
}

function ShippingInfo({ shippingData }) {
  return (
    <>
      {
        shippingData.map(item =>
          <div className="shippingRadio" key={item.title}>
            {item.id === 0 ?
              <input type="radio" name="shipping" defaultChecked={true} /> :
              <input type="radio" name="shipping" />}
            <div className="shippingInfo">
              <div className="shippingTitle">{item.title}</div>
              <div className="shippingPrice"><PriceJudge price={item.price} /></div>
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
        <ShippingInfo shippingData={shippingData} />
      </div>

    </section>
  )
}