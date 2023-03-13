import {useState} from 'react'
import './Select.scss'

function Select() {
  return (
    <select name="Language" id="Language" defaultValue={'fr'}>
      <option value="fr">French</option>
      <option value="ar">Arabic</option>
      <option value="en">English</option>
    </select>
  )
}

export default Select