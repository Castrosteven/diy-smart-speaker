import { ReactNode } from 'react'
import WidgetRenderer from '../../components/widgetRenderer'

const MainPage = (): ReactNode => {
  return (
    <div>
      <WidgetRenderer widgetId="musicPlayer" />
    </div>
  )
}

export default MainPage
