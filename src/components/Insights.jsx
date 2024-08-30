import { useState } from "react";
import TideBarChart from "./Chart";

export default function Insights() {

  return (
    <div className="pb-16">
      <div className="m-4">
        <ul className="grid grid-cols-3 gap-2">
          <li className="p-2 px-4 bg-green-200 text-gray-500 rounded-lg">Ratings 7</li>
          <li className="p-2 px-4 bg-gray-200 text-gray-500 rounded-lg">Swim 8</li>
          <li className="p-2 px-4 bg-blue-200 text-gray-500 rounded-lg">Boating 9</li>
          <li className="p-2 px-4 bg-gray-200 text-gray-500 rounded-lg">Surffing 5</li>
          <li className="p-2 px-4 bg-red-100 text-gray-500 rounded-lg">crowd 9</li>
        </ul>
      </div>

      <div>
        <TideBarChart />
      </div>

    </div>
  )
}