import Address from './Address'
import Shipping from './Shipping'
import Checkout from './Checkout'

function StepContents({ currentStep }) {
  return (
    <form>
      <Address currentStep={currentStep} />
      <Shipping currentStep={currentStep} />
      <Checkout currentStep={currentStep} />
    </form>
  )
}
export default StepContents
