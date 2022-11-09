import styles from './CartList.module.scss'
import { numberWithCommas } from '../../../utilities'

function CartList ({ carts, onIncrease, onDecrease }) {
  let cartList = []
  cartList = carts.map(item => {
    return (
      <div className={styles.cartItem} key={item.id}>
        <ItemDetail item={item}>
          <span className={styles.minus} onClick={() => onDecrease(item.id)} />
          <span className={styles.itemAmount}>{item.quantity}</span>
          <span className={styles.plus} onClick={() => onIncrease(item.id)} />
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
