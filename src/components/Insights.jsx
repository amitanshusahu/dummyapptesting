import { useState } from "react";
import TideBarChart from "./Chart";

export default function Insights() {

  return (
    <div className="pb-16">
      <div className="m-4">
        <ul className="grid grid-cols-3 gap-2">
          <li className="p-2 bg-green-200 text-gray-500 rounded-lg flex justify-between">Ratings <span className="bg-white rounded-md px-1">7</span></li>
          <li className="p-2 bg-gray-200 text-gray-500 rounded-lg flex justify-between">Swim <span className="bg-white rounded-md px-1">8</span> </li>
          <li className="p-2 bg-blue-200 text-gray-500 rounded-lg flex justify-between">Boating <span className="bg-white rounded-md px-1">9</span> </li>
          <li className="p-2 bg-gray-200 text-gray-500 rounded-lg flex justify-between">Surffing <span className="bg-white rounded-md px-1">5</span> </li>
          <li className="p-2 bg-red-100 text-gray-500 rounded-lg flex justify-between">crowd <span className="bg-white rounded-md px-1">9</span> </li>
          <li className="p-2 bg-gray-200 text-gray-500 rounded-lg flex justify-between">Food <span className="bg-white rounded-md px-1">8</span> </li>
        </ul>
      </div>

      <div>
        <TideBarChart />
      </div>

    </div>
  )
}