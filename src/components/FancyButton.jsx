import { Link } from "react-router-dom";

import './FancyButton.scss'

function FancyButton({destination,text,size = 'big'}) {
  return (
    <Link className={"button " + size} to={destination}>
      <p className={size}>{text}</p>
      <img src="/angle-down-white.svg" height='32px' width='32px' />
    </Link>
  )
}

export default FancyButton