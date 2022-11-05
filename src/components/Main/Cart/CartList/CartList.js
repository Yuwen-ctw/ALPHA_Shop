import styles from './CartList.module.scss'
import { numberWithCommas } from '../../../utilities'

function CartList({ cartItems }) {
  let cartList = []
  cartList = cartItems.map(item => <CartItem key={item.id} item={item} />)
  return (
    <div className={styles.cartList}>
      {cartList}
    </div>
  )
}

export default CartList

function CartItem({ item }) {
  // calculate the cost for each item
  const itemCost = numberWithCommas(item.quantity * item.price)
  return (
    <div className={styles.cartItem}>
      <div>
        <img
          className={styles.img}
          src={item.img}
          alt={`img-${item.name}`}>
        </img>
      </div>
      
      <div className={styles.detail}>
        <p className={styles.itemName}>
          {item.name}
        </p>
        <AmountWrapper >
          <span className={styles.itemAmount}>
            {item.quantity}
          </span>
        </AmountWrapper>
        <div className={styles.itemCost}>
          ${itemCost}
        </div>
      </div>
    </div>
  )
}

function AmountWrapper ({ children }) {
  return (
    <div className={styles.amountWrapper}>
      <MinusIcon />
      {children}
      <PlusIcon />
    </div>
  )
}

// svg
function MinusIcon() {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 27C20.1797 27 26 20.9558 26 13.5C26 6.04416 20.1797 0 13 0C5.8203 0 0 6.04416 0 13.5C0 20.9558 5.8203 27 13 27Z"
        fill="#F0F0F5" />
      <rect
        x="7.37207"
        y="14.4"
        width="1.8"
        height="10.8411"
        rx="0.9"
        transform="rotate(-90 7.37207 14.4)"
        fill="black" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9812 27C21.1609 27 26.9812 20.9558 26.9812 13.5C26.9812 6.04416 21.1609 0 13.9812 0C6.8015 0 0.981201 6.04416 0.981201 13.5C0.981201 20.9558 6.8015 27 13.9812 27Z"
        fill="#F0F0F5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7738 19.125C14.2528 19.125 14.6411 18.7367 14.6411 18.2577V14.3182H18.3762C18.8281 14.3182 19.1944 13.9519 19.1944 13.5C19.1944 13.0481 18.8281 12.6818 18.3762 12.6818H14.6411V8.74229C14.6411 8.2633 14.2528 7.875 13.7738 7.875C13.2948 7.875 12.9065 8.2633 12.9065 8.74229V12.6818H9.17145C8.71958 12.6818 8.35327 13.0481 8.35327 13.5C8.35327 13.9519 8.71958 14.3182 9.17145 14.3182H12.9065V18.2577C12.9065 18.7367 13.2948 19.125 13.7738 19.125Z"
        fill="black" />
    </svg>
  )
}