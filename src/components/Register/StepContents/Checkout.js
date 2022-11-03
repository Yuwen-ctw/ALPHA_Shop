function Checkout() {
  return (
    <form>
      <h3>付款資訊</h3>
      <div>
        <label htmlFor="input-creditOwner">持卡人姓名</label>
        <input type="text" id="input-creditOwner" name="creditOwner" placeholder="John Doe" />
      </div>
      <div>
        <label htmlFor="input-creditCode">卡號</label>
        <input type="number" id="input-creditCode" name="creditCode" placeholder="1111 2222 3333 4444" />
      </div>
      <div>
        <label htmlFor="input-creditExp">有效期限</label>
        <input type="text" id="input-creditExp" name="creditExp" placeholder="MM/YY" />
      </div>
      <div>
        <label htmlFor="input-creditCCV">CVC / CCV</label>
        <input type="text" id="input-creditCCV" name="creditCCV" placeholder="123" />
      </div>
    </form>
  )
}

export default Checkout