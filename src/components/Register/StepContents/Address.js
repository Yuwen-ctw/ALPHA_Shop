import styles from './StepContents.module.scss'

function Address() {
  return (
    <div className='none'>
      <h3 className={ styles.title }>寄送地址</h3>
      <div className={ styles.addressPhase }>
        <div className={ styles.formRow }>
        <label htmlFor="select-title">稱謂</label>
        <select id="select-title" name="title">
          <option value="mr" selected>先生</option>
          <option value="ms">小姐</option>
          <option value="mx">不明</option>
        </select>
        </div>
        <div className={ styles.formRow }>
          <label htmlFor="input-name">姓名</label>
          <input type="text" id="input-name" name="name" placeholder="請輸入姓名"/>
        </div>
        <div className={ styles.formRow }>
          <label htmlFor="input-phone">電話</label>
          <input type="tel" id="input-phone" name="phone" placeholder="請輸入行動電話"/>
        </div>
        <div className={ styles.formRow }>
          <label htmlFor="input-email">Email</label>
          <input type="email" id="input-email" name="email" placeholder="請輸入電子郵件"/>
        </div>
        <div className={ styles.formRow }>
          <label htmlFor="input-location">縣市</label>
          <select id="select-location" name="location" required>
          <option value="">請選擇縣市</option>
          <option value="KLU">基隆市</option>
          <option value="TPH">新北市</option>
          <option value="TPE">臺北市</option>
          <option value="TYC">桃園市</option>
          <option value="HSH">新竹縣</option>
          <option value="HSC">新竹市</option>
          <option value="MAC">苗栗市</option>
          <option value="MAL">苗栗縣</option>
          <option value="TXG">臺中市</option>
          <option value="CWH">彰化縣</option>
          <option value="CWS">彰化市</option>
          <option value="NTC">南投市</option>
          <option value="NTO">南投縣</option>
          <option value="YLH">雲林縣</option>
          <option value="CHY">嘉義縣</option>
          <option value="CYI">嘉義市</option>
          <option value="TNN">臺南市</option>
          <option value="KHH">高雄市</option>
          <option value="IUH">屏東縣</option>
          <option value="PTS">屏東市</option>
          <option value="ILN">宜蘭縣</option>
          <option value="ILC">宜蘭市</option>
          <option value="HWA">花蓮縣</option>
          <option value="HWC">花蓮市</option>
          <option value="TTC">臺東市</option>
          <option value="TTT">臺東縣</option>
          <option value="PEH">澎湖縣</option>
          <option value="KMN">金門縣</option>
          <option value="LNN">連江縣</option>
        </select>
        </div>
        <div className={ styles.formRow }>
          <label htmlFor="input-address">地址</label>
          <input type="text" id="input-address" name="address" placeholder="請輸入地址" />
        </div>
      </div>
    </div>
  )
}

export default Address