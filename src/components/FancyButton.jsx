import { Link } from "react-router-dom";

import './FancyButton.scss'

function FancyButton({destination,text}) {
  return (
    <Link className="button" to={destination}>
      <p className='big'>{text}</p>
      <img src="/angle-down-white.svg" height={'32px'} />
    </Link>
  )
}

export default FancyButton