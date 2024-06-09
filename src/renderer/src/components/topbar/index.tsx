import { useState, useEffect } from "react";
import { format } from "date-fns";
import { useAppContext } from "../../context/AppContext";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { theme } = useAppContext();
  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Run effect only once on component mount

  function getTime() {
    return format(currentTime, "h:mm:ss a");
  }

  return (
    <div>
      <div
        className={`h-12 ${
          theme === "dark" ? "border-white" : "border-gray-800"
        } border-b-2 flex justify-center items-center`}
      >
        {getTime()}
      </div>
    </div>
  );
}
