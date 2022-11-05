import LogoIcon from '../../svg/header/LogoIcon.svg'
import AlphaShopIcon from '../../svg/header/ALPHA Shop.svg'
import CartIcon from '../../svg/header/Cart.svg'
import DarkModeIcon from '../../svg/header/DarkMode.svg'
import SearchIcon from '../../svg/header/Search.svg'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <Menu>
        <MenuItem title={'男款'} />
        <MenuItem title={'女款'} />
        <MenuItem title={'最新消息'} />
        <MenuItem title={'客製商品'} />
        <MenuItem title={'聯絡我們'} />
      </Menu>
      <LogoWrap />
      <Menu>
        <Icon iconName={CartIcon} alt={'cart'}/>
        <Icon iconName={DarkModeIcon} alt={'dark-mood'}/>
        <Icon iconName={SearchIcon} alt={'search'}/>
      </Menu>
    </header>
  )
}

export default Header

function Menu({ children }) {
  return (
    <ul>
      {children}
    </ul>
  )
}

function MenuItem({ title }) {
  return (
    <li><a href="/">{title}</a></li>
  )
}


function LogoWrap () {
  return (
    <a href='/'>
      <img src={LogoIcon} alt='icon'/>
      <img src={AlphaShopIcon} alt='Logo'/>
    </a>
  )
}

function Icon ({ iconName, alt }) {
  return <li><a href='/'><img src={iconName} alt={alt}></img></a></li>
}