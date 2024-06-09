import MediaPlayer from '@renderer/widgets/weather'
import { ReactNode } from 'react'

function Layout(): ReactNode {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 h-screen text-xl font-bold p-5 bg-gray-800 ">
      <div className="col-span-4 bg-gray-300">
        <MediaPlayer />
      </div>
      <div className="col-span-2 bg-gray-200">Left Panel</div>
      <div className="col-span-2 bg-gray-400">Right Panel</div>
    </div>
  )
}

export default Layout
