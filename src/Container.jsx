import { HomeIcon, SearchIcon, ChatIcon, UserIcon } from "./assets/Icon"
import { Navigate, useNavigate } from "react-router-dom"

export default function Container({ Content }) {

  const navigate = useNavigate();

  return (
    <div className="w-full h-full overflow-x-hidden">

      <div className="max-w-[720px] m-auto">
        {Content}
        <nav className="  fixed z-50 bottom-0 w-[100dvw] max-w-[720px] bg-blue-50">
          <ul className="flex justify-between ">
            <li className="m-4" onClick={() => navigate("/")}><HomeIcon/></li>
            <li className="m-4" onClick={() => navigate("/search")}><SearchIcon /></li>
            <li className="m-4" onClick={() => navigate("/assistance")}><ChatIcon /></li>
            <li className="m-4" onClick={() => navigate("/user")}><UserIcon /></li>
          </ul>
        </nav>
      </div>

    </div>
  )
}