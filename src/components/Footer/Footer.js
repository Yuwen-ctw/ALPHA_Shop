import { LogoWrap } from '../Header/Header'
import FacebookIcon from '../../svg/footer/Facebook.svg'
import InsIcon from '../../svg/footer/Ins.svg'
import WechatIcon from '../../svg/footer/Wechat.svg'
import styles from './Footer.module.scss'

function Footer () {
  return (
    <footer className={styles.footer}>
      <LogoWrap className={ styles.logo}/>
      <Menu>
        <MenuTitle title={'客戶服務'}/>
        <MenuItem name={'運送說明'}/>
        <MenuItem name={'退換貨相關'}/>
        <MenuItem name={'付款資訊'}/>
        <MenuItem name={'FAQ'}/>
      </Menu>
      <Menu>
        <MenuTitle title={'關於我們'}/>
        <MenuItem name={'品牌故事'}/>
        <MenuItem name={'媒體聯繫'}/>
        <MenuItem name={'Press kit'}/>
      </Menu>
      <Menu>
        <MenuTitle title={'資訊'}/>
        <MenuItem name={'隱私權政策'}/>
        <MenuItem name={'Cookie'}/>
        <MenuItem name={'GDPR'}/>
      </Menu>
      <Menu>
        <MenuTitle title={'追蹤 ALPHA SHOP'}/>
        <MenuItem name={'+886 02123-45678'}/>
        <IconWrap>
          <Icon iconName={FacebookIcon} alt={'Facebook'}/>
          <Icon iconName={InsIcon} alt={'Ins'}/>
          <Icon iconName={WechatIcon} alt={'Wechat'}/>
        </IconWrap>
      </Menu>

    </footer>
  )
}

export default Footer

function Menu({ children }) {
  return <ul className={styles.menu}>{children}</ul>
}

function MenuTitle( {title}) {
  return <h3 className={styles.title}>{title}</h3>
}
function MenuItem({ name }) {
  return (
    <li><a href="/" className={styles.menuItem}>{name}</a></li>
  )
}

function IconWrap ({ children }) {
  return <ul className={styles.iconWrap}>{children}</ul>
}

function Icon({ iconName, alt }) {
  return <li><a href='/'><img src={iconName} alt={alt}></img></a></li>
}