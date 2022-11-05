import { LogoWrap } from '../Header/Header'
import FacebookIcon from '../../svg/footer/Facebook.svg'
import InsIcon from '../../svg/footer/Ins.svg'
import WechatIcon from '../../svg/footer/Wechat.svg'
import styles from './Footer.module.scss'

function Footer () {
  return (
    <footer className={styles.footer}>
      <LogoWrap />
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
      </Menu>
      <Menu>
        <Icon iconName={FacebookIcon} alt={'Facebook'}/>
        <Icon iconName={InsIcon} alt={'Ins'}/>
        <Icon iconName={WechatIcon} alt={'Wechat'}/>
      </Menu>

    </footer>
  )
}

export default Footer

function Menu({ children }) {
  return (
    <ul>
      {children}
    </ul>
  )
}

function MenuTitle( {title}) {
  return <h3>{title}</h3>
}
function MenuItem({ name }) {
  return (
    <li><a href="/">{name}</a></li>
  )
}

function Icon({ iconName, alt }) {
  return <li><a href='/'><img src={iconName} alt={alt}></img></a></li>
}