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
  return (
    <div className="main">
      <div className="stepContainer">
        <StepProgress />
        <Step1 />
        {/* <Step2 /> */}
        {/* <Step3 /> */}
        {/* 如需檢視分業請手動註解分業功能尚未實作 */}
        <ProgressControl />
      </div>
      <Cart />
    </div>
  )
}