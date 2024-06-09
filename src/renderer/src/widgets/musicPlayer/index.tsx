import {
  IoPlaySkipBackSharp,
  IoPauseSharp,
  IoPlaySkipForwardSharp,
} from "react-icons/io5";

export default function MediaPlayer() {
  return (
    <div className="flex justify-center items-center h-full w-full flex-col p-8">
      <div className="h-2/3 w-full flex justify-center items-center">
        <img
          className="h-full"
          src="https://m.media-amazon.com/images/I/71n0xmxpw7L._SL1400_.jpg"
          alt="Eminem"
        />
      </div>
      <div className="flex h-full items-center flex-col">
        <div>
          <h2>Eminem: Go Crazy</h2>
        </div>
        <div className="flex gap-8">
          <div>
            <IoPlaySkipBackSharp className="size-8" />
          </div>
          <div>
            <IoPauseSharp className="size-8" />
          </div>
          <div>
            <IoPlaySkipForwardSharp className="size-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
