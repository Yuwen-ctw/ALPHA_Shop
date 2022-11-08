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
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
export { numberWithCommas, changeDarkMood }
