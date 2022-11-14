import { createContext } from 'react'

const FormDataContext = createContext({
  totalCost: 400,
  title: 'mr',
  name: '',
  phone: '',
  email: '',
  location: '',
  shipping: 'standard',
  address: '',
  creditOwner: '',
  creditCode: '',
  creditExp: '',
  creditCCV: ''
})
export { FormDataContext }
