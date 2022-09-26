
import { useState } from 'react';
import './App.scss';
import styles from './App.scss'
import {initialPlaces} from './place.data';

function App() {
  /* const [places, setPlaces] = useState(initialPlaces); */

  return (
    <div className="bg-[#F7F7F7]">
      
      <h1 className='text-xl font-medium'>SCSS Basics</h1>
      <button className='border border-solid border-pink-200
      hover:bg-pink-200'>go to channel</button>
      <button className='active'>go to channel</button>
      {/* <div className='asd'>
        <h2>SCSS</h2>
        <button>asfasdf</button>
      </div> */}
      {/* { places.map(place => (
          <div key={place.name}>
            <img src={place.image} alt={place.name} />
            <div className={styles.heading}>{place.name}</div>
            <div className={styles.country}>{place.country}</div>
          </div>))} */}
    </div>
  );
}

export default App;
