import PlusSvg from '../../../../svg/main/Plus.svg'
import MinusSvg from '../../../../svg/main/Minus.svg'
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
      <Svg src={MinusSvg} alt='minusIcon' />
      {children}
      <Svg src={PlusSvg} alt='plusIcon' />
      
    </div>
  )
}

// svg
function Svg({ src, alt }) {
  return <img src={src} alt={alt}></img>
}
