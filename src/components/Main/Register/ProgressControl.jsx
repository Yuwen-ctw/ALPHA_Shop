import styles from './Register.module.scss'
import ArrowR from '../../../svg/main/ArrowR.svg'
import ArrowL from '../../../svg/main/ArrowL.svg'

function ProgressControl ({ currentStep }) {
  return (
    <div className={styles.progressControl}>
      <hr className={styles.divider} />
      <div className={styles.btnControl}>
        <BackBtn currentStep={currentStep} />
        <NextBtn currentStep={currentStep} />
      </div>
    </div>
  )
}
export default ProgressControl

function BackBtn ({ currentStep }) {
  // 若當前為 step1 則display: none
  const display = currentStep === 1 ? 'none' : 'block'
  return (
    <button type='button' className={styles.backBtn} style={{ display: `${display}` }}>
      <img src={ArrowL} alt='上一步' />
      上一步
    </button>
  )
}

function NextBtn ({ currentStep }) {
  // 若當前為 step3 則更換文字，並移除箭頭圖標
  const context = currentStep !== 3 ? '下一步' : '確認下單'
  const showArrow = currentStep !== 3 ? <img src={ArrowR} alt='下一步' /> : ''
  return (
    <button type='button' className={styles.nextBtn}>
      {context}
      {showArrow}
    </button>
  )
}
