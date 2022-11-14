import { useContext, useState } from 'react'
import { CartContext } from '../../CartContext'
import { FormDataContext } from '../../FormDataContext'
import { numberWithCommas } from '../../utilities'
import CartList from './CartList'
import styles from './Cart.module.scss'

function Cart () {
  // get initial data from Context
  const cartContext = useContext(CartContext)
  const { formData, setFormData } = useContext(FormDataContext)
  const [cartItems, setCartItems] = useState(cartContext)

  // calculate prop and pass to CartInfo
  const costs = calculateCosts(cartItems)
  function calculateCosts (cartItems) {
    const itemsCost = cartItems.reduce((acc, current) => {
      acc += (current.price * current.quantity)
      return acc
    }, 0)
    // 待釐清免運費之商業邏輯
    const shipCost = itemsCost < 10 ? 120 : 0
    const totalCost = numberWithCommas(itemsCost + shipCost)
    return { itemsCost, shipCost, totalCost }
  }

  // set handlers
  function handleIncreaseQuantity (itemId) {
    // updata cart data
    const nextCarts = cartItems.map(item => item.id !== itemId
      ? item
      : { ...item, quantity: item.quantity + 1 })
    setCartItems(nextCarts)
    // update total cost
    const nextCosts = calculateCosts(nextCarts)
    // update form data
    setFormData({ ...formData, totalCost: nextCosts.totalCost })
  }

  function handleDecreaseQuantity (itemId) {
    const nextCarts = cartItems.map(item => item.id !== itemId
      ? item
      : { ...item, quantity: item.quantity - 1 })
    // remove the item that quantity is zero
    setCartItems(nextCarts.filter(item => item.quantity > 0))
    const nextCosts = calculateCosts(nextCarts)
    setFormData({ ...formData, totalCost: nextCosts.totalCost })
  }
  
  return (
    <section className={styles.section_cart}>
      <h4 className={styles.title}>購物籃</h4>
      <CartList
        carts={cartItems}
        onIncrease={handleIncreaseQuantity}
        onDecrease={handleDecreaseQuantity}
      />
      <CartInfo>
        <InfoItem text='運費' price={costs.shipCost} />
        <InfoItem text='小計' price={costs.totalCost} />
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
