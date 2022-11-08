import "./Cart.scss"
import RenderCart from "./CardItem"
const products = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

function CaculatePaid({products}) {
  let totalPrice = 0
  products.map(item =>
    totalPrice += item.price
  )

  return totalPrice

}

export default function Cart() {
  return (
    <section className="cart">
      <div className="cartContainer">
        <h3 className="cartTitle">購物籃</h3>
        <RenderCart products={products} />
        <div className="shppingPrice">
          <span>運費</span>
          <span>免費</span>
        </div>
        <div className="totalPrice">
          <span>小計</span>
          <span>$<CaculatePaid products={products}/></span>
        </div>
      </div>
    </section>
  );
} 