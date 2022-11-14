import StepProgress from './StepProgress'
import StepContents from './StepContents'
import ProgressControl from './ProgressControl'
import styles from './Register.module.scss'
import { useState, useContext } from 'react'
import { FormDataContext } from '../../FormDataContext'

function Register () {
  const [step, setStep] = useState(1)
  const {formData, printFormData} = useContext(FormDataContext)
  function handleNextClick (e) {
    if (step !== 3) setStep(step + 1)
    else {
      e.preventDefault()
      printFormData(formData)
    }
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
