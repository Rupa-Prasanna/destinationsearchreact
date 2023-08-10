import './index.css'

const DestinationItem = props => {
  const {eachDestination} = props
  const {imgUrl, name} = eachDestination

  return (
    <li className="destination_item">
      <img src={imgUrl} alt={name} className="destination_image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
