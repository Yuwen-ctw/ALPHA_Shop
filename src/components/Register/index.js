import StepProgress from "./StepProgress"
import StepContents from "./StepContents"
import ProgressControl from "./ProgressControl"
import styles from './Register.module.scss'

function Register() {
  return (
    <div className={ styles.section_register }>
      <StepProgress/> 
      <StepContents />
      <hr className={styles.divider} />
      <ProgressControl />
    </div>
  )
}
export default Register