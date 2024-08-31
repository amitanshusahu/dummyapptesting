import { BellIcon, MicIcon } from "../assets/Icon"
import img1 from "../assets/img/1.jpeg"
import img2 from "../assets/img/2.jpg"
import img3 from "../assets/img/3.jpg"
import img4 from "../assets/img/4.jpg"
import img5 from "../assets/img/5.jpg"
import img6 from "../assets/img/6.jpg"
import img7 from "../assets/img/7.jpg"
import img8 from "../assets/img/8.jpg"
import img9 from "../assets/img/9.jpg"
import img10 from "../assets/img/10.jpg"
import { Navigate, useNavigate } from "react-router-dom"

export default function Home() {

  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate("/search");
    }
  };

  return (
    <>

      <div className="m-4 my-8 flex justify-between items-center">
        <div>
          <p className=" text-gray-500">Hi, Amitanshu</p>
          <p className=" text-lg">Where are we going ?</p>
        </div>
        <div className=" shadow-lg p-2 rounded-lg border border-gray-100"
        onClick={() => navigate("/notification")}>
          <BellIcon />
        </div>
      </div>

      {/* // search */}
      <div className="m-4 my-8 relative">
        <input type="search" placeholder="Search Destinations"
          className="border p-4 rounded-lg w-full" 
          onKeyDown={handleKeyDown} />
        <span className="p-1 absolute right-4 top-4"><MicIcon /></span>
      </div>

      {/* tags  */}
      <div className="m-4">
        <ul className="flex gap-4">
          <li className="p-2 px-4 blue text-white rounded-lg">all</li>
          <li className="p-2 px-4 bg-gray-200 text-gray-500 rounded-lg">swmming</li>
          <li className="p-2 px-4 bg-gray-200 text-gray-500 rounded-lg">boating</li>
          <li className="p-2 px-4 bg-gray-200 text-gray-500 rounded-lg">surffing</li>
          <li className="p-2 px-4 bg-gray-200 text-gray-500 rounded-lg">blabla</li>
        </ul>
      </div>

      {/* feed */}
      <div className="m-4 my-8 flex justify-between">
        <h1 className="font-semibold text-xl">Recommended</h1>
        <sapn className="text-blue-700" >See All</sapn>
      </div>

      <div className="m-4 pb-16">
        <div className="grid grid-cols-2 gap-4">

          {/* places */}
          <div className="overflow-hidden relative rounded-lg" onClick={() => navigate("/place")}>
            <div className="h-52">
              <img src={img1} alt="" className="object-cover h-[inherit] w-[inherit]"/>
            </div>
            <div className="img-grad z-10 absolute top-0 w-full h-52">
              <div className="flex p-2 justify-left items-end h-[inherit]">
                  <div className="text-white">
                    <h3>Gopalpur</h3>
                    <p className="text-xs text-gray-300">berhampur, odisha</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden relative rounded-lg" onClick={() => navigate("/place")}>
            <div className="h-52">
              <img src={img2} alt="" className="object-cover h-[inherit] w-full"/>
            </div>
            <div className="img-grad z-10 absolute top-0 w-full h-52">
              <div className="flex p-2 justify-left items-end h-[inherit]">
                  <div className="text-white">
                    <h3>Gopalpur</h3>
                    <p className="text-xs text-gray-300">berhampur, odisha</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden relative rounded-lg" onClick={() => navigate("/place")}>
            <div className="h-52">
              <img src={img3} alt="" className="object-cover h-[inherit] w-full"/>
            </div>
            <div className="img-grad z-10 absolute top-0 w-full h-52">
              <div className="flex p-2 justify-left items-end h-[inherit]">
                  <div className="text-white">
                    <h3>Gopalpur</h3>
                    <p className="text-xs text-gray-300">berhampur, odisha</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden relative rounded-lg" onClick={() => navigate("/place")}>
            <div className="h-52">
              <img src={img4} alt="" className="object-cover h-[inherit] w-full"/>
            </div>
            <div className="img-grad z-10 absolute top-0 w-full h-52">
              <div className="flex p-2 justify-left items-end h-[inherit]">
                  <div className="text-white">
                    <h3>Gopalpur</h3>
                    <p className="text-xs text-gray-300">berhampur, odisha</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden relative rounded-lg" onClick={() => navigate("/place")}>
            <div className="h-52">
              <img src={img5} alt="" className="object-cover h-[inherit] w-full"/>
            </div>
            <div className="img-grad z-10 absolute top-0 w-full h-52">
              <div className="flex p-2 justify-left items-end h-[inherit]">
                  <div className="text-white">
                    <h3>Gopalpur</h3>
                    <p className="text-xs text-gray-300">berhampur, odisha</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden relative rounded-lg" onClick={() => navigate("/place")}>
            <div className="h-52">
              <img src={img6} alt="" className="object-cover h-[inherit] w-full"/>
            </div>
            <div className="img-grad z-10 absolute top-0 w-full h-52">
              <div className="flex p-2 justify-left items-end h-[inherit]">
                  <div className="text-white">
                    <h3>Gopalpur</h3>
                    <p className="text-xs text-gray-300">berhampur, odisha</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden relative rounded-lg" onClick={() => navigate("/place")}>
            <div className="h-52">
              <img src={img7} alt="" className="object-cover h-[inherit] w-full"/>
            </div>
            <div className="img-grad z-10 absolute top-0 w-full h-52">
              <div className="flex p-2 justify-left items-end h-[inherit]">
                  <div className="text-white">
                    <h3>Gopalpur</h3>
                    <p className="text-xs text-gray-300">berhampur, odisha</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden relative rounded-lg" onClick={() => navigate("/place")}>
            <div className="h-52">
              <img src={img8} alt="" className="object-cover h-[inherit] w-full"/>
            </div>
            <div className="img-grad z-10 absolute top-0 w-full h-52">
              <div className="flex p-2 justify-left items-end h-[inherit]">
                  <div className="text-white">
                    <h3>Gopalpur</h3>
                    <p className="text-xs text-gray-300">berhampur, odisha</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden relative rounded-lg" onClick={() => navigate("/place")}>
            <div className="h-52">
              <img src={img9} alt="" className="object-cover h-[inherit] w-full"/>
            </div>
            <div className="img-grad z-10 absolute top-0 w-full h-52">
              <div className="flex p-2 justify-left items-end h-[inherit]">
                  <div className="text-white">
                    <h3>Gopalpur</h3>
                    <p className="text-xs text-gray-300">berhampur, odisha</p>
                  </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden relative rounded-lg" onClick={() => navigate("/place")}>
            <div className="h-52">
              <img src={img10} alt="" className="object-cover h-[inherit] w-full"/>
            </div>
            <div className="img-grad z-10 absolute top-0 w-full h-52">
              <div className="flex p-2 justify-left items-end h-[inherit]">
                  <div className="text-white">
                    <h3>Gopalpur</h3>
                    <p className="text-xs text-gray-300">berhampur, odisha</p>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}