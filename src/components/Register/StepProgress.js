function StepProgress() {
  return (
    <>
      <h1>結帳</h1>
      <Steps />
    </>
  )
}

export default StepProgress

function Steps() {
  return (
    <div>
      <Step stepNum={1} stepName={"寄送地址"} />
      <span></span>
      <Step stepNum={2} stepName={"運送方式"} />
      <span></span>
      <Step stepNum={3} stepName={"付款資訊"} />
    </div>
  )
}
function Step({stepNum, stepName}) {
  return (
    <div>
      <span>{stepNum}</span>
      <span>{stepName}</span>
    </div>
  )
}
