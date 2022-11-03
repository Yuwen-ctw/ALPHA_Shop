import styles from './index.module.scss'
function StepProgress() {
  return (
    <>
    <div className={ styles.stepProgress }>
      <h1 className={styles.title}>結帳</h1>
      <Steps />
    </div>
    </>
  )
}

export default StepProgress

function Steps() {
  return (
    <div className={ styles.steps }>
      <Step stepNum={1  } stepName={"寄送地址"} />
      <span className={ styles.connectLine }></span>
      <Step stepNum={2} stepName={"運送方式"} />
      <span className={styles.connectLine}></span>
      <Step stepNum={3} stepName={"付款資訊"} />
    </div>
  )
}
function Step({ stepNum, stepName }) {
  return (
    <div className={ styles.step }>
      <span className={ styles.stepNum }>{stepNum}</span>
      <span>{stepName}</span>
    </div>
  )
}
