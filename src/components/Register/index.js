import StepProgress from "./StepProgress"
import StepContents from "./StepContents"
import ProgressControl from "./ProgressControl"
import styles from './index.module.scss'

function Register() {
  return (
    <div className={ styles.section_register }>
      <StepProgress/> 
      <StepContents />
      <ProgressControl />
    </div>
  )
}
export default Register