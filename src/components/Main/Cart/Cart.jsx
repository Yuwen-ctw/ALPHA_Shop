import { useState, useContext } from 'react'
import { numberWithCommas } from '../../utilities'
import { CartContext } from '../../CartContext'
import CartList from './CartList'
import styles from './Cart.module.scss'

function Cart () {
  // get data from Context
  const cartItems = useContext(CartContext)
  // put data into state
  const [carts, setCarts] = useState(cartItems)
  // calculate prop and pass to CartInfo
  const itemCost = carts.reduce((acc, current) => {
      acc += (current.price * current.quantity)
      return acc
    }, 0)
  // 待釐清免運費之商業邏輯
  const shipCost = itemCost < 10 ? 120 : 0
  const totalCost = numberWithCommas(itemCost + shipCost)
  
  // set handlers
  function handleIncreaseQuantity (itemId) {
    setCarts(carts.map(item => item.id !== itemId
      ? item
      : { ...item, quantity: item.quantity + 1 }))
  }
  function handleDecreaseQuantity (itemId) {
    const nextCarts = carts.map(item => item.id !== itemId
      ? item
      : { ...item, quantity: item.quantity - 1 })
    // remove the item that quantity is zero
    setCarts(nextCarts.filter(item => item.quantity > 0))
  }
  return (
    <section className={styles.section_cart}>
      <h4 className={styles.title}>購物籃</h4>
      <CartList
        carts={carts}
        onIncrease={handleIncreaseQuantity}
        onDecrease={handleDecreaseQuantity}
      />
      <CartInfo>
        <InfoItem text='運費' price={shipCost} />
        <InfoItem text='小計' price={totalCost} />
      </CartInfo>
    </section>
  )
}

export default Cart

function CartInfo ({ children }) {
  return (
    <div className={styles.CartInfo}>
      {children}
    </div>
  )
}

function InfoItem ({ text, price }) {
  return (
    <div className={styles.infoItem}>
      <span className={styles.infoText}>
        {text}
      </span>

      <span className={styles.infoPrice}>
        {price === 0 ? '免費' : `$${price}`}
      </span>
    </div>
  )
}

