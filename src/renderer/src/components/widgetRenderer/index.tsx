import { ReactNode } from 'react'
import { useAppContext } from '../../context/AppContext'
import MusicPlayer from '../../widgets/musicPlayer'
import { Widgets } from '../../types'

const Wrapper = ({ children }: { children: ReactNode }): ReactNode => {
  const { theme } = useAppContext()

  return (
    <div
      className={`w-3/4 h-3/4 rounded-lg ${
        theme === 'dark' ? 'bg-gray-200 text-gray-800' : 'bg-blue-500 text-gray-800'
      }`}
    >
      {children}
    </div>
  )
}
const WidgetRenderer = ({ widgetId }: { widgetId: Widgets }): ReactNode => {
  switch (widgetId) {
    case 'musicPlayer':
      return (
        <Wrapper>
          <MusicPlayer />
        </Wrapper>
      )
    default:
      return (
        <div>
          <p>No</p>
        </div>
      )
  }
}

export default WidgetRenderer
