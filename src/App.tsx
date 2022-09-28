import { useEffect, useRef, useState } from 'react'
/* import './App.scss' */
import styles from './App.module.scss'
import { initialPlaces } from './place.data'
import PlaceItem from './PlaceItem'
import { IPlace } from './place.interface'

function App() {
  const [places, setPlaces] = useState<IPlace[]>(initialPlaces)

  const ref = useRef<HTMLInputElement>(null)
  
  const addNewPlace = () =>{
    console.log(ref.current?.value);
    setPlaces([{
      country: 'Tanzanya',
      name:'Manta Resort',
      image: 'https://travellan.ru/upload/News%20of%20Travel/Manta-Resort_907x474.jpg'
    }, ...places])
  }

  useEffect(()=>{
    console.log('new places added')
    return () => {}
  },[places])

  return (
    <div className='bg-[#F7F7F7] p-10'>
      <div className='text-center mb-6'>
        <button className={styles.button} onClick={addNewPlace}>Add place</button>
        <input placeholder='enter smthing' ref={ref}/>
      </div>
      
      <div className={styles.main}>
      {/* <h1 className="">SCSS Basics</h1>
      <button>go to channel</button>
      <button>go to channel</button> */}
      {places.map(place => (
        <PlaceItem key={place.name} place={place} />
      ))}
    </div>
    </div>
    
  )
}

export default App
