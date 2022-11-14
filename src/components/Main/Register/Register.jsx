import StepProgress from './StepProgress'
import StepContents from './StepContents'
import ProgressControl from './ProgressControl'
import styles from './Register.module.scss'
import { useState, useContext } from 'react'
import { FormDataContext } from '../../FormDataContext'

function Register () {
  // set state and get values from Main component
  const [step, setStep] = useState(1)
  const { formData } = useContext(FormDataContext)

  // set handlers related with button click
  function handleNextClick (e) {
    if (step !== 3) setStep(step + 1)
    else {
      // print form data when submit
      e.preventDefault()
      console.log(formData)
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
