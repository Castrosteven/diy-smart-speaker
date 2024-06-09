import { useAppContext } from "../../context/AppContext";

export default function ({
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { theme } = useAppContext();
  return (
    <button
      {...rest}
      className={`p-4 rounded-md ${
        theme === "dark"
          ? "bg-gray-200 text-gray-800"
          : "bg-blue-500 text-gray-800"
      }`}
    ></button>
  );
}
