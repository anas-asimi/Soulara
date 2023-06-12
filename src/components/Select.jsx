import { useRef } from 'react'
import './Select.scss'

function Select({ isWhite, language, setLanguage }) {

  let options = useRef()

  let languages = ['french', 'arabic', 'english']

  function optionsToggler() {
    options.current.classList.toggle('expanded')
  }

  function optionsHide() {
    options.current.classList.remove('expanded')
  }

  return (
    <div className={`select-container ${isWhite ?? false?'white':''}`} onClick={optionsToggler} onMouseLeave={optionsHide}>
      <div className="selected">
        {language}
        <img src="/angle-down-blue.svg" height='20px' width='20px' />
      </div>
      <div className="options" ref={options} >
        {languages.map((option) => (<p className='option' key={option} onClick={() => { setLanguage(option) }}>{option}</p>))}
      </div>
    </div>
  )
}

export default Select