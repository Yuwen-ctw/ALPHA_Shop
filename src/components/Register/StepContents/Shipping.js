function Shipping() {
  return (
    <form>
      <h3>運送方式</h3>
      <div>
        <input type="radio" value="standard" name="shipping" checked />
        <div>
          <h4>標準運送</h4>
          <p>約 3~7 個工作天</p>
          <span>免費</span>
        </div>
      </div>
      <div>
        <input type="radio" value="dhl" name="shipping" />
        <div>
          <h4>DHL 貨運</h4>
          <p>48 小時內送達</p>
          <span>$500</span>
        </div>
      </div>
    </form>
  )
}

export default Shipping