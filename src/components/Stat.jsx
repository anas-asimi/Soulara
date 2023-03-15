import './Stat.scss'

function Stat({number,text}) {
  return (
    <div className="stat">
      <h5>{number}</h5>
      <p className="text">{text}</p>
    </div>
  )
}

export default Stat