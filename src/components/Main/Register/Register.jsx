import StepProgress from './StepProgress'
import StepContents from './StepContents'
import ProgressControl from './ProgressControl'
import styles from './Register.module.scss'
import { useState } from 'react'
function Register () {
  const [step, setStep] = useState(1)
  return (
    <section className={styles.section_register}>
      <StepProgress step={step} />
      <StepContents step={step} />
      <ProgressControl
        step={step}
        setStep={setStep}
      />
    </section>
  )
}
export default Register
