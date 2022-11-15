import React, { useState } from "react";

const Context = React.createContext();

const productData = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];


function ContextProvider({ children }) {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState(productData);
  const [formData, setFormData] = useState({
    // userTitle: "mr",
    // userName: "NAN",
    // userPhone: "NAN",
    // userEmail: "NAN",
    // userCity: "NAN",
    // userAddress: "NAN",
    // shipping: "NAN",
    visaName: "NAN",
    visaNumber: "NAN",
    visaEXP: "NAN",
    visaCVC: "NAN",
  });



  function handleFormSubmit(event) {
    let data = Object.values(formData)
    console.log(formData)
    // data.forEach(item => {
    //   console.log(item === "NAN")
    //   if (item === "NAN") {
    //     alert("請填寫必要欄位!")
    //     return false
    //   }
    // })
    
    alert("已完成下單，感謝您的購買") 
     
  }

  function handleFormChange(event) {
    const { name, value } = event.target;  

    setFormData((prevFormData) => {
           return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  return (
    <Context.Provider
      value={{
        page,
        setPage,
        products,
        setProducts,
        formData,
        setFormData,
        handleFormSubmit,
        handleFormChange,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
