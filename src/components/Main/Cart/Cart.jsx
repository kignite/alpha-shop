import "./Cart.scss"
import RenderCart from "./CartItem"
import { Context } from "../../../Context"
import { useContext} from "react"



export default function Cart() {
  const {
    products,
    setProducts
   } = useContext(Context)

  let totalPrice = 0
  products.forEach(data => {
    totalPrice += data.price * data.quantity
  })

  return (
    <section className="cart">
      <div className="cartContainer">
        <h3 className="cartTitle">購物籃</h3>
        {totalPrice !== 0 ?
          <RenderCart products={products} setProducts={setProducts} /> :
          <div><div className="cartItem emptyCart">購物車是空的</div></div>
        }
        <div className="shppingPrice">
          <span>運費</span>
          <span>免費</span>
        </div>
        <div className="totalPrice">
          <span>小計</span>
          <span>${totalPrice}</span>
        </div>
      </div>
    </section>
  );
} 