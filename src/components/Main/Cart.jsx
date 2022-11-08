import { ReactComponent as Minus } from "../../icons/minus.svg"
import { ReactComponent as Plus } from "../../icons/plus.svg"

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

function RenderCart(products) {
  const listItems = products.data.map(item =>
    <div className="cartProduct" key={item.id}>

      <div className="cartItem">
        <img src={item.img} alt={item.name} />
        <div className="productInfo">
          <div className="detail">
            <span>{item.name}</span>
            <span className="price">${item.price}</span>
          </div>
          <div className="quantitySelect">
            <Minus />
            <p>{item.quantity}</p>
            <Plus />
          </div>
        </div>
      </div>
    </div>

  )
  return (
    <>
      {listItems}
    </>
  )
}

function CaculatePaid(products) {
  let totalPrice = 0
  products.data.map(item =>
    totalPrice += item.price
  )
  return totalPrice

}

export default function Cart() {
  return (
    <section className="cart">
      <div className="cartContainer">
        <h3 className="cartTitle">購物籃</h3>
        <RenderCart data={products} />
        <div className="shppingPrice">
          <span>運費</span>
          <span>免費</span>
        </div>
        <div className="totalPrice">
          <span>小計</span>
          <span>$<CaculatePaid data={products}/></span>
        </div>
      </div>
    </section>
  );
} 