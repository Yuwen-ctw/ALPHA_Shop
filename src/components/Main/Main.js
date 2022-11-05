import Register from "./Register"
import Cart from "./Cart"
import styles from './Main.module.scss'

function Main () {
  return (
    <main className={styles.main}>
      <Register />
    </main>
  )
}

export default Main