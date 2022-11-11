import "./Step2.scss"

const shippingData = [
  { title: "標準配送", price: 0, period: "約 3~7個標準工作天" },
  { title: "DHL 貨運", price: 500, period: "48小時內送達" },
]

// 兩種寫法
// function PriceJudge({ price }) {
//   if (price === 0) {
//     return "免費"
//   }
//   return "$" + price
// }

function PriceJudge({ price }) {
  return (
    <>
      {price === 0 ? "免費" : "$" + price} 
    </>
  )
}



function ShippingInfo(info) {
  return (
    <>
      {
        info.data.map(item =>

          <div className="shippingRadio" key={item.title}>
            <input type="radio" name="shipping" defaultChecked={true} />
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
        <ShippingInfo data={shippingData} />
      </div>

    </section>
  )
}