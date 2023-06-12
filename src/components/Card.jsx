import './Card.scss'

function Card({ image, title }) {
  return (
    <div className='card'>
      <img src={image} alt={title} loading="lazy" />
      <p className='big'>{title}</p>
    </div>
  )
}

export default Card