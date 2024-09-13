import { useState } from 'react'
import Header from './components/Header';



function App() {
  const [city,setCity] = useState('')

  
  async function getWeather(city) {
    try {
      const response = await fetch('/.netlify/functions/getWeather', {
        method: 'POST',
        body: JSON.stringify({ city })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  }

  return (

    <div className='flex flex-col m-auto max-w-[300px] sm:max-w-[400px] md:max-w-[600px] '>
      <Header />
      <div className='flex m-auto mt-10 w-[100%]'>
        
          <input className='bg-black w-[100%] rounded-lg p-3 text-lg font-bold' type="text" placeholder='Enter location' onChange={(e)=>{
            setCity(e.target.value)
          }}/>
          <button className='bg-black ml-2 rounded-lg p-3 text-lg font-bold' onClick={()=>{
            getWeather(city)
          }}>
            Seach
          </button>
      </div>
      
    </div>
  )
}

export default App
