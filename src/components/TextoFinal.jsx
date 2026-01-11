import React from 'react'

const TextoFinal = ({textClass}) => {
  return (
    <div className="h-44" id="info">
        <div className="w-full h-full flex flex-col justify-center items-center gap-y-3">
            <h2 className={`text-gray-500 px-5 md:px-0 text-center md:leading-10 ${textClass}`}>Hay momentos inolvidables que se atesoran en el corazon para siempre. <br /> Por esa razón, quiero que compartas conmigo este dia tan especial.</h2>
        </div>
    </div>
  )
}

export default TextoFinal
