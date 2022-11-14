import { useState, useContext } from 'react'
import { CartContext } from '../CartContext'
import { FormDataContext } from '../FormDataContext'
import Register from './Register'
import Cart from './Cart'
import styles from './Main.module.scss'

function Main () {
  const cartContext = useContext(CartContext)
  const formDataContext = useContext(FormDataContext)
  const [cartItems, setCartItems] = useState(cartContext)
  const [formData, setFormData] = useState(formDataContext)

  const itemCost = cartItems.reduce((acc, current) => {
      acc += (current.price * current.quantity)
      return acc
    }, 0)

  function printFormData(formData) {
    setFormData(formData)
    console.log(formData)
  }
  // set handlers
  function handleIncreaseQuantity (itemId) {
    setCartItems(cartItems.map(item => item.id !== itemId
      ? item
      : { ...item, quantity: item.quantity + 1 }))
  }
  function handleDecreaseQuantity (itemId) {
    const nextCarts = cartItems.map(item => item.id !== itemId
      ? item
      : { ...item, quantity: item.quantity - 1 })
    // remove the item that quantity is zero
    setCartItems(nextCarts.filter(item => item.quantity > 0))
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>結帳</h1>
      <FormDataContext.Provider value={{formData, printFormData}}>
        <CartContext.Provider  value={{
          cartItems,
          itemCost, 
          handleIncreaseQuantity, 
          handleDecreaseQuantity}}>
        <div className={styles.wrapper}>
          <Register />
          <Cart />
        </div>
        </CartContext.Provider>
      </FormDataContext.Provider>
    </main>
  )
}

export default Main

