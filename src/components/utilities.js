function numberWithCommas (num) {
  // 12345.6789  =>  12,345.6789
  const hasFloat = num.toString().includes('.')
  if (hasFloat) {
    const [integer, float] = [...num.toString().split('.')]
    return integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + float
  }

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function changeDarkMood (e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}

function displayNavBar (e) {
  const navbarList = document.querySelector('#navbar-list')
  const iconList = document.querySelector('#icon-list')
  const header = document.querySelector('header')

  if (e.target.checked) {
    navbarList.setAttribute('style', 'visibility: visible;')
    iconList.setAttribute('style', 'visibility: visible;')
    header.setAttribute('style', 'height: 600px')
  } else {
    navbarList.setAttribute('style', 'visibility: hidden;')
    iconList.setAttribute('style', 'visibility: hidden;')
    header.setAttribute('style', 'height: 60px')
  }
}

function screenListener () {
  // 監聽瀏覽器視窗寬度異動事件
  // 當使用者於小螢幕狀態關閉navbar後，再切換為大螢幕的話，navbar.checked 依然處於 false 狀態，造成寬螢幕的navbar消失，且無法開啟(除非再切換回小螢幕把它打開)。
  // 目前的解法是監聽視窗寬度，當寬度大於break point時，預設打開navbar；小於break point時，則預設隱藏
  // 不夠好的方法，待思考
  // 此監聽器放在跟目錄的 index.js裡
  window.onresize = function () {
    const clientWidth = document.body.clientWidth
    const navbar = document.querySelector('#navbar')
    const navbarList = document.querySelector('#navbar-list')
    const iconList = document.querySelector('#icon-list')
    const header = document.querySelector('header')
    if (clientWidth > 750) {
      navbar.checked = true
      navbarList.setAttribute('style', 'visibility: visible;')
      iconList.setAttribute('style', 'visibility: visible;')
      header.setAttribute('style', 'height: 60px')
    } else {
      navbar.checked = false
      navbarList.setAttribute('style', 'visibility: hidden;')
      iconList.setAttribute('style', 'visibility: hidden;')
      header.setAttribute('style', 'height: 60px')
    }
  }
}

export {
  numberWithCommas,
  changeDarkMood,
  displayNavBar,
  screenListener
}
