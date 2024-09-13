import React from 'react'

export default function Widgets() {

    const widgitStyle = 'bg-blue-500 px-4 py-10 rounded-lg'
  return (
    <div className='flex flex-col text-center '>

        <div className='grid grid-cols-2 gap-5'>
            <div className={widgitStyle}>
                pickle
            </div>

            <div className={widgitStyle}>
                pickle
            </div>

            <div className={widgitStyle}>
                pickle
            </div>

            <div className={widgitStyle}>
                pickle
            </div>
        </div>

        
      
    </div>
  )
}
