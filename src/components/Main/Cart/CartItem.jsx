import { ReactComponent as Minus } from "../../../icons/minus.svg"
import { ReactComponent as Plus } from "../../../icons/plus.svg"

import { useState } from 'react';

const data = [
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

export default function RenderCart() {
  const [
    products,
    setProducts
  ] = useState(data)

  function handleDecreaseClick(productId) {
    let nextProducts = products.map(product => {
      if (product.id === productId) {
        console.log("quantity: ", product.quantity)
        return {
          ...product,
          quantity: product.quantity - 1
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter(p =>
      p.quantity > 0
    );
    setProducts(nextProducts)
  }
  function handleIncreaseClick(productId) {
    let nextProducts = products.map(product => {
      if (product.id === productId) {  
        console.log("quantity: ", product.quantity)      
        return {
          ...product,
          quantity: product.quantity + 1
        };
      } else {
        return product;
      }
    });   
    setProducts(nextProducts)

  }

  return (
    data.map(item =>
      <div className="cartItem" key={item.id}>
        <img src={item.img} alt={item.name} />
        <div className="productInfo">
          <div className="detail">
            <span>{item.name}</span>
            <span className="price">${item.price}</span>
          </div>
          <div className="quantitySelect">
            <Minus onClick={() => {
              handleDecreaseClick(item.id)
            }} />
            <p>{item.quantity}</p>
            <Plus onClick={() => {
              handleIncreaseClick(item.id)
            }} />
          </div>
        </div>
      </div>
    )
  )
}