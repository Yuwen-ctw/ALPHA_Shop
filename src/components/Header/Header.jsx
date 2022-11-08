import NavToggle from '../../svg/header/Vector.svg'
import { changeDarkMood } from '../utilities'
import styles from './Header.module.scss'

function Header () {
  return (
    <header className={styles.header}>
      <NavToggleIcon />
      <Menu className={styles.classMenu}>
        <MenuItem title='男款' />
        <MenuItem title='女款' />
        <MenuItem title='最新消息' />
        <MenuItem title='客製商品' />
        <MenuItem title='聯絡我們' />
      </Menu>
      <Menu className={styles.iconMenu}>
        <Icon iconName={'searchIcon'} />
        <Icon iconName={'cartIcon'} />
        <DarkIcon />
      </Menu>
      <LogoWrap className={styles.logo}/>
    </header>
  )
}

export default Header

function NavToggleIcon () {
  return (
    <div className={styles.NavToggleIcon}>
      <img src={NavToggle} alt='NavToggle' />
    </div>
  )
}

function Menu ({ children, className }) {
  return (
    <ul className={className}>
      {children}
    </ul>
  )
}

function MenuItem ({ title }) {
  return (
    <li><a href='/' className={styles.menuItem}>{title}</a></li>
  )
}

function LogoWrap ({ className }) {
  return (
    <a href='/' className={className}>
      <span className={'logoIcon'}></span>
      <span className={'logoName'}></span>
    </a>
  )
}

export { LogoWrap }

function Icon ({ iconName }) {
  return <li><a href='/' className={styles[iconName]}> </a></li>
}

function DarkIcon () {
  return (
    <li>
      <input type='checkbox' id='dark-mood' style={{display: 'none'}}
          onChange={e => changeDarkMood(e)}/>
        <label htmlFor='dark-mood' className={styles.darkIcon}></label>
    </li>
  )
}
