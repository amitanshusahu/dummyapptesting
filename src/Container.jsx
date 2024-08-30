import { HomeIcon, SearchIcon, ChatIcon, UserIcon } from "./assets/Icon"

export default function Container({ Content }) {
  return (
    <div className="w-full h-full overflow-x-hidden">

      <div className="max-w-[720px] m-auto">
        {Content}
        <nav className="  fixed z-50 bottom-0 w-[100dvw] max-w-[720px] bg-blue-50">
          <ul className="flex justify-between ">
            <li className="m-4"><HomeIcon/></li>
            <li className="m-4"><SearchIcon /></li>
            <li className="m-4"><ChatIcon /></li>
            <li className="m-4"><UserIcon /></li>
          </ul>
        </nav>
      </div>

    </div>
  )
}