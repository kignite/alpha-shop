import Main from "./components/Main/Main"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { ContextProvider } from "./Context"
import "../src/components/reset.css"

export default function AlphaShop() {
  return (  
    <ContextProvider>
      {/* <Header /> */}
      <Main />
      {/* <Footer/> */}
    </ContextProvider>    
  )
}