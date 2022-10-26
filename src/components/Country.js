import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'




export default function Example({value,setValue}) {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  
  return (
    <PhoneInput
      placeholder="Enter phone number"
      defaultCountry='UZ'
      value={value}
      onChange={setValue}/>
  )
}

