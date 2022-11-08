import Step1 from "./Step/Step1"
import Step2 from "./Step/Step2"
import Step3 from "./Step/Step3"
import Cart from "./Cart/Cart"
import ProgressControl from "./ProgressControl/ProgressControl"
import StepProgress from "./StepProgress/StepProgress"
import "./Main.scss"

// 分頁器測試
// function Page() {
//   const next = document.getElementsByClassName("next")
//   let phase = document.querySelector(".done").phase
//   next.addEventListener("click", function () {
//     console.log(phase)
//     return phase+=1;
//   })
// }

export default function Main() {
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