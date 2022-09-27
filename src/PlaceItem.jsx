import styles from './App.module.scss'

const PlaceItem = ({place}) => {
  return (
    <div className={styles.item}>
      <img src={place.image} alt={place.name} />
      <div className={styles.heading}>{place.name}</div>
      <div className={styles.country}>{place.country}</div>
    </div>
  )
}

export default PlaceItem
