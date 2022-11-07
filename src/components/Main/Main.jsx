import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import ProgressControl from "./ProgressControl"
import StepProgress from "./StepProgress"
import "./Main.scss"


export default function Main() {
  return (
    <div className="main">
      <StepProgress />
      {/* <Step1 /> */}
      <Step2 />
      {/* <Step3 /> */}
      {/* <ProgressControl /> */}
      {/* 購物車尚未實做 */}
      {/* <Cart /> */}
    </div>  
  )
}