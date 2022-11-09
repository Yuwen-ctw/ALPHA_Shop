import StepProgress from './StepProgress'
import StepContents from './StepContents'
import ProgressControl from './ProgressControl'
import styles from './Register.module.scss'
import { useState } from 'react'
function Register () {
  const [step, setStep] = useState(1)
  function handleNextClick () {
    step !== 3 && setStep(step + 1)
  }
  function handlePreviousClick () {
    setStep(step - 1)
  }
  return (
    <section className={styles.section_register}>
      <StepProgress step={step} />
      <StepContents step={step} />
      <ProgressControl
        step={step}
        onNext={handleNextClick}
        onPrevious={handlePreviousClick}
      />
    </section>
  )
}
export default Register
