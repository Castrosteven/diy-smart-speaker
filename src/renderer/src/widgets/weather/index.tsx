import { ReactNode } from 'react'
import { IoPlaySkipBackCircle, IoPauseCircle, IoPlaySkipForwardCircle } from 'react-icons/io5'

const MediaPlayer = (): ReactNode => {
  return (
    <div className="bg-white h-full w-full grid grid-cols-8 grid-rows-3">
      <div className="col-span-8 row-span-2 bg-red-500 grid grid-cols-8 grid-rows-1">
        <div className="col-span-3 row-span-1 bg-yellow-400">
          <p>image</p>
        </div>
        <div className="col-span-5 row-span-1 bg-yellow-800 grid grid-rows-3">
          <div className="row-span-1 bg-blue-800">
            <p>name</p>
          </div>
          <div className="row-span-2 bg-red-500 flex gap-2  ">
            <IoPlaySkipBackCircle className="w-full h-full" />
            <IoPauseCircle className="w-full h-full" />
            <IoPlaySkipForwardCircle className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="col-span-8 row-span-1 bg-blue-300">
        <p>SLIDER</p>
      </div>
    </div>
  )
}

export default MediaPlayer
