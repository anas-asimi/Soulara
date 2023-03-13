import { useState , useRef } from 'react'
import './Select.scss'


function Select() {
  const [language, setLanguage] = useState('french')
  const options = useRef()
  let languages = ['french', 'arabic', 'english']
  function optionsToggler() {
    options.current.classList.toggle('expanded')
  }
  return (
    <div className="select-container" onClick={optionsToggler}>
      <div className="selected">
        {language}
        <img src="/angle-down.svg" height={'20px'} />
      </div>
      <div className="options" ref={options} >
        {languages.map((option) => (<p className='option' key={option} onClick={e => setLanguage(option)}>{option}</p>))}
      </div>
    </div>
  )
}

export default Select