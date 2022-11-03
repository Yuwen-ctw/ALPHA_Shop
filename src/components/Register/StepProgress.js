import styles from './Register.module.scss'

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
      <Step stepNum={1} stepName={"寄送地址"} isDone={true}/>
      <Step stepNum={2} stepName={"運送方式"} isDone={false}/>
      <Step stepNum={3} stepName={"付款資訊"} isDone={false}/>
    </div>
  )
}

function Step({ stepNum, stepName, isDone}) {
  const numStyle = isDone ? styles.stepNum : styles.stepNumUndone
  const nameStyle = isDone ? styles.stepName : styles.stepNameUndone
  // 若步驟為"付款資訊"，則隱藏line
  const lineStyle = stepName === "付款資訊" ? 'd-none' : (isDone ? styles.line : styles.lineUndone)
  
  return (
    <div className={ styles.step }>
      <span className={ numStyle }>{stepNum}</span>
      <span className={ nameStyle }>{stepName}</span>
      <span className={ lineStyle }></span>
    </div>
  )
}
