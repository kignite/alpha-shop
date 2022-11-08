import { ReactComponent as Minus } from "../../../icons/minus.svg"
import { ReactComponent as Plus } from "../../../icons/plus.svg"

export default function RenderCart({products}) {
  const listItems = products.map(item =>
    <div className="cartItem" key={item.id}>
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

  )
  return (
    <>
      {listItems}
    </>
  )
}