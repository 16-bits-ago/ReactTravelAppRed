import { useState } from 'react'
import './App.scss'
import styles from './App.module.scss'
import { initialPlaces } from './place.data'

function App() {
  /* const [places, setPlaces] = useState(initialPlaces); */

  return (
    <div className={styles.app}>
      <h1 className=''>SCSS Basics</h1>
      <button>go to channel</button>
      <button>go to channel</button>
      {/* { places.map(place => (
          <div key={place.name}>
            <img src={place.image} alt={place.name} />
            <div className={styles.heading}>{place.name}</div>
            <div className={styles.country}>{place.country}</div>
          </div>))} */}
    </div>
  )
}

export default App
