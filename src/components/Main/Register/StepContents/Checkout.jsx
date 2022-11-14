import { useContext } from 'react'
import { FormDataContext } from '../../../FormDataContext'
import styles from './StepContents.module.scss'

function Checkout ({ step }) {
  const showPhase = step === 3 ? '' : 'd-none'
  const { handleFormChange } = useContext(FormDataContext)
  return (
    <div className={showPhase}>
      <h3 className={styles.title}>付款資訊</h3>
      <div className={styles.checkoutPhase}>

        <div className={styles.formRow}>
          <label htmlFor='input-creditOwner'>持卡人姓名</label>
          <input
            type='text'
            id='input-creditOwner'
            name='creditOwner'
            placeholder='John Doe'
            onChange={handleFormChange}
          />
        </div>

        <div className={styles.formRow}>
          <label htmlFor='input-creditCode'>卡號</label>
          <input
            type='number'
            id='input-creditCode'
            name='creditCode'
            placeholder='1111 2222 3333 4444'
            onChange={handleFormChange}
          />
        </div>

        <div className={styles.formRow}>
          <label htmlFor='input-creditExp'>有效期限</label>
          <input
            type='text'
            id='input-creditExp'
            name='creditExp'
            placeholder='MM/YY'
            onChange={handleFormChange}
          />
        </div>

        <div className={styles.formRow}>
          <label htmlFor='input-creditCCV'>CVC / CCV</label>
          <input
            type='number'
            id='input-creditCCV'
            name='creditCCV'
            placeholder='123'
            onChange={handleFormChange}
          />
        </div>
      </div>
    </div>
  )
}

export default Checkout
