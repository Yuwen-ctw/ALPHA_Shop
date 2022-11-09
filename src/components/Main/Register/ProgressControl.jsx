import styles from './Register.module.scss'

function ProgressControl ({ step, onNext, onPrevious }) {
  return (
    <div className={styles.progressControl}>
      <hr className={styles.divider} />
      <div className={styles.btnControl}>
        <BackBtn step={step} handleClick={onPrevious} />
        <NextBtn step={step} handleClick={onNext} />
      </div>
    </div>
  )
}
export default ProgressControl

function BackBtn ({ step, handleClick }) {
  // 若當前為 step1 則display: none
  const display = step === 1 ? 'none' : 'block'
  return (
    <button
      type='button'
      className={styles.backBtn}
      style={{ display: `${display}` }}
      onClick={handleClick}
    >
      <span className={styles.arrowL} />
      上一步
    </button>
  )
}

function NextBtn ({ step, handleClick }) {
  let context = '下一步'
  let showArrow = <span className={styles.arrowR} />
  let type = 'button'
  let key = 'next'

  if (step === 3) {
    // 若當前為 step3 則更換文字，並移除箭頭圖標
    context = '確認下單'
    showArrow = ''
    type = 'submit'
    key = 'submit'
  }

  return (
    <button
      key={key}
      type={type}
      form='register'
      className={styles.nextBtn}
      onClick={handleClick}
    >
      {context}
      {showArrow}
    </button>
  )
}
