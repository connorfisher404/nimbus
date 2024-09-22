import React, { useEffect, useState } from 'react'

export default function Widgets(props) {
    const {weatherData} = props
    const [currentTemp, setCurrentTemp] = useState('')
    const [imgCode, setImgCode] = useState('')
    const [clearState, setClearState] = useState('')
    const [feelsLike, setFeelsLike] = useState('')
    const [uvIndex, setUVIndex] = useState('')

    useEffect(()=>{
        if(weatherData.length !== 0){
            try {
                setCurrentTemp(weatherData.current.temp)
                setImgCode(weatherData.current.weather[0].icon)
                setClearState(weatherData.current.weather[0].description)
                setFeelsLike(weatherData.current.feels_like)
                setUVIndex(weatherData.current.uvi)

            } catch (error) {
                console.error('Something went wrong: ', error)
            }
            
        }
    },[weatherData])


    
    
    const widgitStyle = 'bg-blue-500 px-4 py-10 rounded-lg'
  return (
    <div className='flex flex-col text-center '>

        <div className='grid grid-cols-2 gap-5'>
            <div className={widgitStyle}>
                {currentTemp ? <div className='fugaz-one-regular text-sm sm:text-lg md:text-xl lg:2xl '>Current Temp</div> : ''}
                {currentTemp ? <div className='p-4 text-base font-bold sm:text-lg md:text-xl lg:xl '>{currentTemp}&deg;C.</div>: ''}
                
            </div>

            <div className={widgitStyle}>
            {feelsLike ? <div className='fugaz-one-regular text-sm sm:text-lg md:text-xl lg:2xl '>Feels Like</div> : ''}
               {feelsLike ? <div className='p-4 text-base font-bold sm:text-lg md:text-xl lg:xl'>{Number(feelsLike).toFixed(1)}&deg;C.</div> : ''}
            </div>

            <div className={widgitStyle}>
                {clearState ? <div className='fugaz-one-regular text-sm sm:text-lg md:text-xl lg:2xl '>{clearState.charAt(0).toUpperCase()+clearState.slice(1)}</div> : ''}
                {imgCode ? <img className='m-auto' src={`${imgCode}.png`} />: ''}
            </div>

            <div className={widgitStyle}>
                {uvIndex ? <div className='fugaz-one-regular text-sm sm:text-lg md:text-xl lg:2xl '>UV Index</div> : <div className='fugaz-one-regular text-sm sm:text-lg md:text-xl lg:2xl '>UV Index</div>}
                {uvIndex ? <div className='p-4 text-2xl font-bold mt-4'>{Math.round(Number(uvIndex))}</div> : <div className='p-4 text-2xl font-bold mt-4'>0</div>}

            </div>
        </div>

        <div className={`flex flex-col mt-5 ` + widgitStyle}>
            <div className='grid grid-cols-3 text-base sm:text-lg md:text-xl justify-items-center items-center font-bold'>

                {weatherData ? <div>{(new Date(weatherData.daily[0].dt * 1000)).toLocaleDateString('en-US',{ weekday: 'short', day: 'numeric', month: 'short' } )}</div> : ''}
                <div><img className='iconImage' src={`${weatherData.daily[0].weather[0].icon}.png`} alt="weather-icon" /></div>
                {weatherData ? <div className='text-xs font-bold sm:text-base md:text-lg lg:text-xl'>{weatherData.daily[0].temp.min}&deg; - {weatherData.daily[0].temp.max}&deg;</div> : ''}
            </div>
            <div className='grid grid-cols-3 text-base sm:text-lg md:text-xl justify-items-center items-center font-medium'>
                {weatherData ? <div>{(new Date(weatherData.daily[1].dt * 1000)).toLocaleDateString('en-US',{ weekday: 'short', day: 'numeric', month: 'short' } )}</div> : ''}
                <div><img className='iconImage' src={`${weatherData.daily[1].weather[0].icon}.png`} alt="weather-icon" /></div>
                {weatherData ? <div className='text-xs font-bold sm:text-base md:text-lg lg:text-xl'>{weatherData.daily[1].temp.min}&deg; - {weatherData.daily[0].temp.max}&deg;</div> : ''}
            </div>
            <div className='grid grid-cols-3 text-base sm:text-lg md:text-xl justify-items-center items-center font-bold'>
                {weatherData ? <div>{(new Date(weatherData.daily[2].dt * 1000)).toLocaleDateString('en-US',{ weekday: 'short', day: 'numeric', month: 'short' } )}</div> : ''}
                <div><img className='iconImage' src={`${weatherData.daily[2].weather[0].icon}.png`} alt="weather-icon" /></div>
                {weatherData ? <div className='text-xs font-bold sm:text-base md:text-lg lg:text-xl'>{weatherData.daily[2].temp.min}&deg; - {weatherData.daily[0].temp.max}&deg;</div> : ''}
            </div>
            <div className='grid grid-cols-3 text-base sm:text-lg md:text-xl justify-items-center items-center font-bold'>
                {weatherData ? <div>{(new Date(weatherData.daily[3].dt * 1000)).toLocaleDateString('en-US',{ weekday: 'short', day: 'numeric', month: 'short' } )}</div> : ''}
                <div><img className='iconImage' src={`${weatherData.daily[3].weather[0].icon}.png`} alt="weather-icon" /></div>
                {weatherData ? <div className='text-xs font-bold sm:text-base md:text-lg lg:text-xl'>{weatherData.daily[3].temp.min}&deg; - {weatherData.daily[0].temp.max}&deg;</div> : ''}
            </div>
            <div className='grid grid-cols-3 text-base sm:text-lg md:text-xl justify-items-center items-center font-bold'>
                {weatherData ? <div>{(new Date(weatherData.daily[4].dt * 1000)).toLocaleDateString('en-US',{ weekday: 'short', day: 'numeric', month: 'short' } )}</div> : ''}
                <div><img className='iconImage' src={`${weatherData.daily[4].weather[0].icon}.png`} alt="weather-icon" /></div>
                {weatherData ? <div className='text-xs font-bold sm:text-base md:text-lg lg:text-xl'>{weatherData.daily[4].temp.min}&deg; - {weatherData.daily[0].temp.max}&deg;</div> : ''}
            </div>
            <div className='grid grid-cols-3 text-base sm:text-lg md:text-xl justify-items-center items-center font-bold'>
                {weatherData ? <div>{(new Date(weatherData.daily[5].dt * 1000)).toLocaleDateString('en-US',{ weekday: 'short', day: 'numeric', month: 'short' } )}</div> : ''}
                <div><img className='iconImage' src={`${weatherData.daily[5].weather[0].icon}.png`} alt="weather-icon" /></div>
                {weatherData ? <div className='text-xs font-bold sm:text-base md:text-lg lg:text-xl'>{weatherData.daily[5].temp.min}&deg; - {weatherData.daily[0].temp.max}&deg;</div> : ''}
            </div>
            <div className='grid grid-cols-3 text-base sm:text-lg md:text-xl justify-items-center items-center font-bold'>
                {weatherData ? <div>{(new Date(weatherData.daily[6].dt * 1000)).toLocaleDateString('en-US',{ weekday: 'short', day: 'numeric', month: 'short' } )}</div> : ''}
                <div><img className='iconImage' src={`${weatherData.daily[6].weather[0].icon}.png`} alt="weather-icon" /></div>
                {weatherData ? <div className='text-xs font-bold sm:text-base md:text-lg lg:text-xl'>{weatherData.daily[6].temp.min}&deg; - {weatherData.daily[0].temp.max}&deg;</div> : ''}
            </div>

            
        </div>

        
      
    </div>
  )
}
