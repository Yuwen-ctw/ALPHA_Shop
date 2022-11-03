import Address from './Address'
import Shipping from './Shipping'
import Checkout from './Checkout'
import styles from './StepContents.module.scss'

function StepContents() {
  return (
    <div className={styles.stepContents }>
    <Address />
    <Shipping />
    <Checkout />
    </div>
  )
}
export default StepContents