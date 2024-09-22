import { useEffect, useState } from 'react'
import Header from './components/Header';
import Widgets from './components/Widgets';




function App() {
  const [city,setCity] = useState('')

  const [fetchedCity, setFetchedCity] = useState([])
  const [weatherData, setWeatherData] = useState([])
  const [cityModal, setCityModal] = useState(false)
  const [widgitModal, setWidgitModal] = useState(false)
  useEffect(()=>{
    if(fetchedCity.length > 0){
      setCityModal(true)

    }else{
      setCityModal(false)
    }
  }, [fetchedCity])

  
  
  // continue with this connor !!!
  async function getWeather(latitude, longitude) {
    try {
      const response = await fetch('/.netlify/functions/getWeather', {
        method: 'POST',
        body: JSON.stringify({ latitude,longitude })
      });
      const data = await response.json();


      setWeatherData(data)
    } catch (error) {
      alert('Error fetching weather', error)
      console.error('Error fetching weather:', error);
    }
  }

  async function getCity(city){
    try{
      const response = await fetch('/.netlify/functions/getCity',{
        method: 'POST',
        body: JSON.stringify({city})
      })
      const data = await response.json();
      setFetchedCity(data)


    }catch(error){
      alert('Error fetching city ', error)
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
            getCity(city)
          }}>
            Search
          </button>

          

          
      </div>
      {cityModal ? <div className='bg-blue-500 p-4 mb-10 font-bold rounded-br-lg rounded-bl-lg'>
                      {fetchedCity.map((index,key)=>{
                        return(
                          <div key={key} className='grid grid-cols-3'>
                            <div onClick={()=>{                  
                              getWeather(index.lat, index.lon)
                              
                              setTimeout(()=>{
                                setWidgitModal(true)
                                setFetchedCity([])
                                setCityModal(false)
                              },'1000')
                              

                            }} className='mb-2 cursor-pointer'>{index.name}</div> 
                            <div onClick={()=>{
                              getWeather(index.lat,index.lon)
                              
                              setTimeout(()=>{
                                setWidgitModal(true)
                                setFetchedCity([])
                                setCityModal(false)
                              },'1000')
                              

                            }} className='cursor-pointer'>{index.country}</div>
                            <div onClick={()=>{
                              getWeather(index.lat,index.lon)
                              
                              setTimeout(()=>{
                                setWidgitModal(true)
                                setFetchedCity([])
                                setCityModal(false)
                              },'1000')
                              

                              
                            }} className='cursor-pointer'>{index.state}</div>
                          </div>              

                        )
                        
                      })}
                  </div>: <div className='pb-10'></div>
                }
      
      
      {widgitModal ? <Widgets weatherData={weatherData} /> : ''}
    </div>
  )
}

export default App
