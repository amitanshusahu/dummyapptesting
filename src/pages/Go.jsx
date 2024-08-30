import { Navigate, useNavigate } from "react-router-dom"

export default function Go() {

  const navigate = useNavigate();

  return(
    <div className="m-4"> destination set to gopalpur/ <span className="text-red-400 p-2" onClick={() => navigate("/")}>cancel trip
</span>
      <br />
      <br />

     this will contain all the services {`(ola, book hotel, local shops, food etc)`} infographs for safety, maps and all that jazz</div>
  )
}