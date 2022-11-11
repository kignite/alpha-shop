import "./Cart.scss"
import RenderCart from "./CartItem"

import { useState } from "react"
const initialProducts = [
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
    quantity: 10,
  },]


export default function Cart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)
  
  let totalPrice=0
  products.forEach(data => {
    totalPrice+= data.price*data.quantity
  })

  return (
    <section className="cart">
      <div className="cartContainer">
        <h3 className="cartTitle">購物籃</h3>
        <RenderCart products={products} setProducts={setProducts} />
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