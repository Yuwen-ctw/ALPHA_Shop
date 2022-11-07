import Address from './Address'
import Shipping from './Shipping'
import Checkout from './Checkout'

function StepContents ({ step }) {
  return (
    <form id='register'>
      <Address step={step} />
      <Shipping step={step} />
      <Checkout step={step} />
    </form>
  )
}
export default StepContents
