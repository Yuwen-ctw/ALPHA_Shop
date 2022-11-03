import StepProgress from "./StepProgress"
import StepContents from "./StepContents"
import ProgressControl from "./ProgressControl"

function Checkout() {
  return (
    <div>
      <StepProgress/> 
      <StepContents />
      <ProgressControl />
    </div>
  )
}

export default Checkout