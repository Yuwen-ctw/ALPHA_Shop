import styles from './StepContents.module.scss'
function Shipping() {
  return (
    <div className='none'>
      <h3 className={styles.title}>運送方式</h3>
      <div className= {styles._shippingPhase}>
        <div className={styles.formRow}>
          <div className={ styles.radioWrapper }>
            <input type="radio" value="standard" name="shipping" checked />
            <div>
              <h4 className={ styles.tetl }>標準運送</h4>
              <p className={styles.description}>約 3~7 個工作天</p>
              <span className={styles.price}>免費</span>
            </div>
          </div>
          <div className={styles.radioWrapper}>
            <input type="radio" value="dhl" name="shipping" />
            <div>
              <h4 className={styles.tetl}>DHL 貨運</h4>
              <p className={styles.description}>48 小時內送達</p>
              <span className={styles.price}>$500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Shipping