import { useState } from "react"
import { LocationIcon } from "../assets/Icon"
import img1 from "../assets/img/9.jpg"
import Insights from "../components/Insights";
import Explore from "../components/Explore";
import Reviews from "../components/Reviews";
import { Navigate, useNavigate } from "react-router-dom";

export default function Place() {

  const navigate = useNavigate();

  const [tab, setTab] = useState(<Insights />);

  return (
    <div>

      {/* image */}
      <div className="overflow-hidden relative">
        <div className="h-[40dvh]">
          <img src={img1} alt="" className="object-cover h-[inherit] w-full" />
        </div>
        <div className="img-grad-white z-10 absolute top-0 w-full h-[40dvh]"></div>
      </div>

      {/* details */}
      <div className="m-4 flex items-center justify-between">
        <div>
          <p className="font-bold text-2xl">Gpalpur Beach</p>
          <p className="text-gray-400 flex items-center gap-1"> <LocationIcon size="4" /> Gopalpur, odisha</p>
        </div>
        <div>
          <button className="blue text-white p-2 px-3 font-bold rounded-lg" onClick={() => navigate("/go")}>Go</button>
        </div>
      </div>


      {/* tab box */}
      <menu className="m-4 flex gap-3">
        <li className="text-blue-700 p-1" onClick={() => setTab(<Insights />)}>Insights</li>
        <li className="text-gray-700 p-1" onClick={() => setTab(<Explore />)}>Explore</li>
        <li className="text-gray-700 p-1" onClick={() => setTab(<Reviews />)}>Reviews</li>
      </menu>

      {/* tags  */}
      {tab}


    </div>
  )
}