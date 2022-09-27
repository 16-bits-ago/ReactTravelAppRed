import { useState } from 'react'
import './App.scss'
import styles from './App.module.scss'
import { initialPlaces } from './place.data'
import PlaceItem from './PlaceItem.jsx'

function App() {
  const [places, setPlaces] = useState(initialPlaces)

  return (
    <div className={styles.main}>
      {/* <h1 className="">SCSS Basics</h1>
      <button>go to channel</button>
      <button>go to channel</button> */}
      {places.map(place => (
        <PlaceItem key={place.name} place={place} />
      ))}
    </div>
  )
}

export default App
