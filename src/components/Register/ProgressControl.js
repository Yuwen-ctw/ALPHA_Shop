import styles from './Register.module.scss'

function ProgressControl() {
  return (
    <div className={styles.progressControl}>
      <button type="button" className={'hide'}>
        <i class="fa-solid fa-arrow-left"></i>
        上一步
      </button>
      <button type="button" className={styles.nextBtn}>
        下一步
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  )
}
export default ProgressControl