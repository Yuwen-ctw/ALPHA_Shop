import styles from './Register.module.scss'

function ProgressControl ({ step, setStep }) {
  return (
    <div className={styles.progressControl}>
      <hr className={styles.divider} />
      <div className={styles.btnControl}>
        <BackBtn step={step} setStep={setStep} />
        <NextBtn step={step} setStep={setStep} />
      </div>
    </div>
  )
}
export default ProgressControl

function BackBtn ({ step, setStep }) {
  // 若當前為 step1 則display: none
  const display = step === 1 ? 'none' : 'block'
  function handleClick (e) {
    setStep(step - 1)
  }
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

function NextBtn ({ step, setStep }) {
  let context = '下一步'
  let showArrow = <span className={styles.arrowR} />
  let type = 'button'

  if (step === 3) {
    // 若當前為 step3 則更換文字，並移除箭頭圖標
    context = '確認下單'
    showArrow = ''
    type = 'submit'
  }

  function handleClick () {
    step !== 3 && setStep(step + 1)
  }
  return (
    <button
      type={type}
      form='register' //沒註解掉這行的話，當step進行到3時瀏覽器會告警(chorme)，目前懷疑是 React 執行兩次的關係，暫時查無解方。
      className={styles.nextBtn}
      onClick={handleClick}
    >
      {context}
      {showArrow}
    </button>
  )
}
