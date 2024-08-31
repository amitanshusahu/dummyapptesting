import { MicIcon } from "../assets/Icon";

export default function Search() {
  return (
    <div className="m-4">
      {/* // search */}
      <div className="my-8 relative">
        <input type="search" placeholder="Search Destinations"
          className="border p-4 rounded-lg w-full" />
        <span className="p-1 absolute right-4 top-4"><MicIcon /></span>
      </div>

      Site under development
      <br />
      <br />
      this is the classic filter based search page.. a basic feature
      <li>users can search different location</li>
      <li>add fillters like "swim", "less crowded", "food", "distance" wagera wagera</li>
      <li>add a algo to fix filtes.. iterates throw the string and matches substrings and searches accordingly</li>
    </div>
  )
}