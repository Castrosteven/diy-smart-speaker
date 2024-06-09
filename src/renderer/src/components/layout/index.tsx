import { ReactNode } from "react";
import "./index.css";
import { useAppContext } from "../../context/AppContext";
import Topbar from "../topbar";
function Layout({ children }: { children: ReactNode }) {
  const { theme } = useAppContext();
  return (
    <div
      className={`screen ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-300"
      }`}
    >
      <Topbar />
      <div className="p-8">{children}</div>
    </div>
  );
}

export default Layout;
