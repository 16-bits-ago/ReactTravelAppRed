import { FC } from 'react'
import styles from './App.module.scss'
import { IPlace } from './place.interface'

interface IPlaceItem {
  place: IPlace
}

const PlaceItem:FC<IPlaceItem> = ({place}) => {
  return (
    <div className={styles.item}>
      <img src={place.image} alt={place.name} />
      <div className={styles.heading}>{place.name}</div>
      <div className={styles.country}>{place.country}</div>
    </div>
  )
}

export default PlaceItem
