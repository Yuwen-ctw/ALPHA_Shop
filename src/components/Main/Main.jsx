import Register from "./Register"
import Cart from "./Cart"
import styles from './Main.module.scss'

function Main () {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>結帳</h1>
      <div className={styles.wrapper}>
        <Register />
        <Cart />
      </div>
    </main>
  )
}

export default Main