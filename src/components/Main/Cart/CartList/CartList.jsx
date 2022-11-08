import styles from './CartList.module.scss'
import { numberWithCommas } from '../../../utilities'

function CartList ({ carts, setCarts }) {
  function increaseQuantity (itemId) {
    setCarts(carts.map(item => item.id !== itemId
      ? item
      : { ...item, quantity: item.quantity + 1 }))
  }
  function decreaseQuantity (itemId) {
    const nextCarts = carts.map(item => item.id !== itemId
      ? item
      : { ...item, quantity: item.quantity - 1 })
    // remove the item that quantity is zero
    setCarts(nextCarts.filter(item => item.quantity > 0))
  }

  let cartList = []
  cartList = carts.map(item => {
    return (
      <div className={styles.cartItem} key={item.id}>
        <ItemDetail item={item}>
          <span className={styles.minus} onClick={() => decreaseQuantity(item.id)} />
          <span className={styles.itemAmount}>{item.quantity}</span>
          <span className={styles.plus} onClick={() => increaseQuantity(item.id)} />
        </ItemDetail>
      </div>
    )
  })
  return (
    <div className={styles.cartList}>
      {cartList}
    </div>
  )
}

export default CartList

function ItemDetail ({ children, item }) {
  const cost = numberWithCommas(item.quantity * item.price)
  return (
    <>
      <div>
        <img
          className={styles.img}
          src={item.img}
          alt={`img-${item.name}`}
        />
      </div>
      <div className={styles.detail}>
        <p className={styles.itemName}>
          {item.name}
        </p>
        <div className={styles.amountWrapper}>
          {children}
        </div>
        <div className={styles.itemCost}>
          ${cost}
        </div>
      </div>
    </>
  )
}
