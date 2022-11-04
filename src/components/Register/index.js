import StepProgress from "./StepProgress"
import StepContents from "./StepContents"
import ProgressControl from "./ProgressControl"
import styles from './Register.module.scss'

function Register() {
  const currentStep = 1
  return (
    <div className={ styles.section_register }>
      <StepProgress currentStep={currentStep} /> 
      <StepContents currentStep={currentStep}/>
      <ProgressControl currentStep={currentStep} />
    </div>
  )
}
export default Register