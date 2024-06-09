import { ReactNode } from "react";
import { useAppContext } from "../../context/AppContext";
import MusicPlayer from "../../widgets/musicPlayer";
import { Widgets } from "../../types";

const Wrapper = ({ children }: { children: ReactNode }) => {
  const { theme } = useAppContext();

  return (
    <div
      className={`w-96 h-96 rounded-lg ${
        theme === "dark"
          ? "bg-gray-200 text-gray-800"
          : "bg-blue-500 text-gray-800"
      }`}
    >
      {children}
    </div>
  );
};

export default function ({ widgetId }: { widgetId: Widgets }) {
  switch (widgetId) {
    case "musicPlayer":
      return (
        <Wrapper>
          <MusicPlayer />
        </Wrapper>
      );

    default:
      throw new Error("Widget Does Not Exist");
  }
}
