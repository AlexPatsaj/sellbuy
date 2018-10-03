import Head from 'next/head'
import baseStyles from 'styles/style.scss'
import GreetingPopup from './general/GreetingPopup'

export default props => (
  <div>
    
    {props.children}
    <GreetingPopup/>
    <style jsx global>
      {baseStyles}
    </style>
  </div>
)
