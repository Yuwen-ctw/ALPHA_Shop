import CartList from './CartList'
import { numberWithCommas } from '../../utilities'
import styles from './Cart.module.scss'
import { useState } from 'react'

function Cart () {
  const [carts, setCarts] = useState(cartItems)
  // calculate props and pass to CartInfo
  const totalCost = numberWithCommas(
    carts.reduce((acc, current) => {
      acc += (current.price * current.quantity)
      return acc
    }, 0)
  )
  // 待釐清免運費之商業邏輯
  const shipCost = totalCost < 10 ? 120 : '免費'

  return (
    <section className={styles.section_cart}>
      <h4 className={styles.title}>購物籃</h4>
      <CartList carts={carts} setCarts={setCarts} />
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
        {price === '免費' ? '免費' : `$${price}`}
      </span>
    </div>
  )
}

// data
const cartItems = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2
  },

  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1
  },

  {
    id: '3',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1
  }
]
