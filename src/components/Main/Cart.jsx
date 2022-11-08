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

function RenderCart( products ) {
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

export default function Cart() {
  return (
    <section className="cart">
      <div className="cartContainer">
        <h3 className="cartTitle">購物籃</h3>
        <RenderCart data={products} />
        {/* <div className="cartProduct">
          <div className="cartItem">
            <img src="https://picsum.photos/300/300?text=2" alt="貓咪乾乾" />
            <div className="productInfo">
              <div className="detail">
                <span>破壞補釘修身牛仔褲</span>
                <span className="price">$100</span>
              </div>
              <div className="quantitySelect">
                <Minus />
                <p>1</p>
                <Plus />
              </div>
            </div>
          </div>
        </div>
        <div className="cartProduct">
          <div className="cartItem">
            <img src="https://picsum.photos/300/300?text=2" alt="貓咪乾乾" />
            <div className="productInfo">
              <div className="detail">
                <span>破壞補釘修身牛仔褲</span>
                <span className="price">$100</span>
              </div>
              <div className="quantitySelect">
                <Minus />
                <p>1</p>
                <Plus />
              </div>
            </div>
          </div>
        </div> */}
        <div className="shppingPrice">
          <span>運費</span>
          <span>免費</span>
        </div>
        <div className="totalPrice">
          <span>小計</span>
          <span>$5,298</span>
        </div>
      </div>
    </section>
  );
} 