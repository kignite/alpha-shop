import { ReactComponent as Minus } from "../../../icons/minus.svg"
import { ReactComponent as Plus } from "../../../icons/plus.svg"

import { useState } from 'react';

export default function RenderCart({ products, setProducts }) {

  function handleDecreaseClick(productId) {
    let nextProducts = products.map(product => {
      if (product.id === productId) {
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
        return {
          ...product,
          quantity: product.quantity + 1
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

  return (
    products.map(item =>
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