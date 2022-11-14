import { useContext } from 'react'
import { FormDataContext } from '../../../FormDataContext'
import styles from './StepContents.module.scss'
function Shipping ({ step }) {
  const showPhase = step === 2 ? '' : 'd-none'
  const { handleFormChange } = useContext(FormDataContext)
  return (
    <div className={showPhase}>
      <h3 className={styles.title}>運送方式</h3>
      <div className={styles._shippingPhase}>
        <div className={styles.formRow} onChange={handleFormChange}>
          <InputRadioWrapper>
            <input type='radio' value='standard' name='shipping' defaultChecked />
            <InputRadioDetail telt='標準運送' description='約 3~7 個工作天' price='免費' />
          </InputRadioWrapper>

          <InputRadioWrapper>
            <input type='radio' value='dhl' name='shipping' />
            <InputRadioDetail telt='DHL 貨運' description='48 小時內送達' price='$500' />
          </InputRadioWrapper>
        </div>
      </div>
    </div>
  )
}
export default Shipping

function InputRadioWrapper ({ children }) {
  return (
    <div className={styles.radioWrapper}>
      {children}
    </div>
  )
}

function InputRadioDetail ({ telt, description, price }) {
  return (
    <div>
      <h4 className={styles.tetl}>{telt}</h4>
      <p className={styles.description}>{description}</p>
      <span className={styles.price}>{price}</span>
    </div>
  )
}
