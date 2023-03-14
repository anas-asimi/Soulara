import { useState, useRef } from 'react'
import './Select.scss'

function Select() {

  let [language, setLanguage] = useState('french')
  let options = useRef()

  let languages = ['french', 'arabic', 'english']

  function optionsToggler() {
    options.current.classList.toggle('expanded')
  }

  function optionsHide() {
    options.current.classList.remove('expanded')
  }

  return (
    <div className="select-container" onClick={optionsToggler} onMouseLeave={optionsHide}>
      <div className="selected">
        {language}
        <img src="/angle-down.svg" height={'20px'} />
      </div>
      <div className="options" ref={options} >
        {languages.map((option) => (<p className='option' key={option} onClick={() => { setLanguage(option) }}>{option}</p>))}
      </div>
    </div>
  )
}

export default Select