import "./Cart.scss"
import RenderCart from "./CartItem"
const products = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 10,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 5,
  },
]

function CaculatePaid({ data }) {
  let totalPrice = 0
  data.map(item =>
    totalPrice += (item.price * item.quantity)
  )
  return totalPrice
}

export default function Cart() {
  return (
    <section className="cart">
      <div className="cartContainer">
        <h3 className="cartTitle">購物籃</h3>
        <RenderCart />
        {/* <RenderCart data={products} /> */}
        <div className="shppingPrice">
          <span>運費</span>
          <span>免費</span>
        </div>
        <div className="totalPrice">
          <span>小計</span>
          <span>$<CaculatePaid data={products} /></span>
        </div>
      </div>
    </section>
  );
} 