import styles from './Register.module.scss'

function StepProgress ({ currentStep }) {
  return (
    <>
      <div className={styles.stepProgress}>
        <h1 className={styles.title}>結帳</h1>
        <Steps currentStep={currentStep} />
      </div>
    </>
  )
}

export default StepProgress

function Steps ({ currentStep }) {
  // 為每一個step判斷當前狀態應屬於 undo, doing 還是done，並傳遞給step元件來決定應套用的樣式
  function getState (step) {
    const state = currentStep - step
    if (state === 0) {
      return 'doing'
    } else if (state >= 0) {
      return 'done'
    } else {
      return 'undo'
    }
  }
  return (
    <div className={styles.steps}>
      <Step stepNum={currentStep <= 1 ? 1 : <CheckIcon />} stepName='寄送地址' state={getState(1)} />
      <Step stepNum={currentStep <= 2 ? 2 : <CheckIcon />} stepName='運送方式' state={getState(2)} />
      <Step stepNum={currentStep <= 3 ? 3 : <CheckIcon />} stepName='付款資訊' state={getState(3)} />
    </div>
  )
}

function Step ({ stepNum, stepName, state }) {
  // 透過狀態分別決定 數字、文字 及連接線 之樣式
  // 數字有3種狀態，採用switch判斷；文字及連接線則使用三元運算子
  let numStyle
  switch (state) {
    case 'doing':
      // 規格中的 step1 於 doing 狀態下之樣式與 step2、3 不同
      numStyle = stepNum !== 1 ? styles.stepNumDoing : styles.stepNum
      break
    case 'undo':
      numStyle = styles.stepNumUndo
      break
    default:
      numStyle = styles.stepNum
  }
  const nameStyle = state !== 'undo' ? styles.stepName : styles.stepNameUndo
  // 若欲渲染之元件為"付款資訊"，則隱藏line
  const lineStyle = stepName === '付款資訊' ? 'd-none' : (state !== 'undo' ? styles.line : styles.lineUndo)

  return (
    <div className={styles.step}>
      <span className={numStyle}>{stepNum}</span>
      <span className={nameStyle}>{stepName}</span>
      <span className={lineStyle} />
    </div>
  )
}

function CheckIcon () {
  return (
    <svg width='17' height='12' viewBox='0 0 17 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M5.99997 9.16994L1.82997 4.99994L0.409973 6.40994L5.99997 11.9999L16.5 1.49994L15.09 0.0899391L5.99997 9.16994Z' fill='white' />
    </svg>
  )
}
