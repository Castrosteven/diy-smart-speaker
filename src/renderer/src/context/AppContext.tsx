import { ReactNode, createContext, useContext } from 'react'
import { useSettings } from '../hooks/useSettings'
import Layout from '../components/layout'
import { Theme } from '../types'

interface Context {
  theme: Theme
  updateTheme: () => void
}
const Context = createContext<Context>({} as Context)

export const AppContext = (): ReactNode => {
  const settings = useSettings()
  return (
    <Context.Provider value={settings}>
      <Layout />
    </Context.Provider>
  )
}

export const useAppContext = (): Context => useContext(Context)
