import LogoIcon from '../../svg/header/LogoIcon.svg'
import AlphaShopIcon from '../../svg/header/ALPHA Shop.svg'
import CartIcon from '../../svg/header/Cart.svg'
import DarkModeIcon from '../../svg/header/DarkMode.svg'
import SearchIcon from '../../svg/header/Search.svg'
import NavToggle from '../../svg/header/Vector.svg'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <NavToggleIcon />
      <Menu className={styles.classMenu}>
        <MenuItem title={'男款'} />
        <MenuItem title={'女款'} />
        <MenuItem title={'最新消息'} />
        <MenuItem title={'客製商品'} />
        <MenuItem title={'聯絡我們'} />
      </Menu>
      <Menu className={styles.iconMenu}>
        <Icon src={SearchIcon} alt={'search'}/>
        <Icon src={CartIcon} alt={'cart'}/>
        <Icon src={DarkModeIcon} alt={'dark-mood'}/>
      </Menu>
      <LogoWrap className={styles.logo}/>
    </header>
  )
}

export default Header

function NavToggleIcon() {
  return (
    <div className={styles.NavToggleIcon}>
      <img src={NavToggle} alt='NavToggle'></img>
    </div>
  )
}

function Menu({ children, className }) {
  return (
    <ul className={className}>
      {children}
    </ul>
  )
}

function MenuItem({ title }) {
  return (
    <li><a href="/" className={styles.menuItem}>{title}</a></li>
  )
}


function LogoWrap({ className }) {
  return (
    <a href='/' className={className}>
      <img src={LogoIcon} alt='icon'/>
      <img src={AlphaShopIcon} alt='Logo'/>
    </a>
  )
}

export {LogoWrap} 

function Icon ({ src, alt }) {
  return <li><a href='/'><img src={src} alt={alt}></img></a></li>
}