import Step1 from "./Step/Step1"
import Step2 from "./Step/Step2"
import Step3 from "./Step/Step3"
import Cart from "./Cart/Cart"
import ProgressControl from "./ProgressControl/ProgressControl"
import StepProgress from "./StepProgress/StepProgress"

import "./Main.scss"

import { useState } from "react"



export default function Main() {
  const [page, setPage] = useState(1)
  // console.log(page)
  return (
    <div className="main">
      <div className="stepContainer">
        <StepProgress page={page} setPage={setPage} />
        {page === 1 && <Step1 />}
        {page === 2 && <Step2 />}
        {page === 3 && <Step3 />}
        <ProgressControl page={page} setPage={setPage} />
      </div>
      <Cart />
    </div>
  )
}