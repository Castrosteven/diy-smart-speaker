import { ReactNode, createContext, useContext } from "react";
import { useSettings } from "../hooks/useSettings";
import Layout from "../components/layout";
import { Theme } from "../types";

interface Context {
  theme: Theme;
  updateTheme: () => void;
}
const Context = createContext<Context>({} as Context);

export const AppContext = ({ children }: { children: ReactNode }) => {
  const settings = useSettings();
  return (
    <Context.Provider value={settings}>
      <Layout>{children}</Layout>
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
