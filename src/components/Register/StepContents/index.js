import Address from './Address'
import Shipping from './Shipping'
import Checkout from './Checkout'
import styles from './StepContents.module.scss'

function StepContents() {
  return (
    <form className={styles.stepContents }>
    <Address />
    <Shipping />
    <Checkout />
    </form>
  )
}
export default StepContents