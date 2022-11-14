import { createContext } from "react";

const FormDataContext = createContext({
  creditOwner: '',
  creditCode: '',
  creditExp: '',
  creditCCV: '', 
})
export { FormDataContext }