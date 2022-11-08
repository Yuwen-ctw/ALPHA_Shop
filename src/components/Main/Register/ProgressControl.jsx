import styles from './Register.module.scss'

function ProgressControl ({ step, setStep }) {
  return (
    <div className={styles.progressControl}>
      <hr className={styles.divider} />
      <div className={styles.btnControl}>
        <BackBtn step={step} setStep={setStep}/>
        <NextBtn step={step} setStep={setStep}/>
      </div>
    </div>
  )
}
export default ProgressControl

function BackBtn ({ step, setStep }) {
  // 若當前為 step1 則display: none
  const display = step === 1 ? 'none' : 'block'
  function handleClick () {
    setStep(step - 1)
  }
  return (
    <button 
      type='button' 
      className={styles.backBtn} 
      style={{ display: `${display}` }}
      onClick={handleClick}>
      <span className={styles.arrowL}></span>
      上一步
    </button>
  )
}

function NextBtn ({ step, setStep }) {
  let context = '下一步'
  let showArrow = <span className={styles.arrowR}></span>
  let type = 'button'
  
  if (step === 3) {
    // 若當前為 step3 則更換文字，並移除箭頭圖標
    context = '確認下單'
    showArrow = ''
    // 預期當step === 3 時，type 要變更為 sumbit(冒號右側)，用以準備進行送出。
    // 但當使用者剛進入 step3 時，chrome瀏覽器會告警(firefox則不會)，查資料後發現此錯誤是input欄位沒填妥，且執行送出時，瀏覽器驗證後給的告警，但使用者明明還沒submit，因暫時未解，故改為button。
    type = 'button'
  } 

  function handleClick () {
    step !== 3 && setStep(step + 1)
  }
  return (
    <button 
    type= {type}
    form='register'
    className={styles.nextBtn}
    onClick={handleClick}>
      {context}
      {showArrow}
    </button>
  )
}
