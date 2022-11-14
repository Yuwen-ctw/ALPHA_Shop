import { useState, useContext } from 'react'
import { FormDataContext } from '../FormDataContext'
import Register from './Register'
import Cart from './Cart'
import styles from './Main.module.scss'

function Main () {
  // get initial data from context
  const formDataContext = useContext(FormDataContext)
  const [formData, setFormData] = useState(formDataContext)

  // set handler
  function handleFormChange (e) {
    const value = e.target.value
    const key = e.target.name
    setFormData({ ...formData, [key]: value })
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>結帳</h1>
      <FormDataContext.Provider value={{
        formData,
        setFormData,
        handleFormChange
      }}
      >
        <div className={styles.wrapper}>
          <Register />
          <Cart />
        </div>
      </FormDataContext.Provider>
    </main>
  )
}

export default Main
