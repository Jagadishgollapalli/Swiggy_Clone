import React,{useState} from "react";
import {useDispatch} from "react-redux";
import { setQuery } from "../../store/slices/searchSlice";

export default function Search() {
    const [input, searchInput] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        searchInput(e.target.value);
        dispatch(setQuery(e.target.value));
    };

  return (
    <div className="hidden sm:flex items-center space-x-4 pr-2">
      <div className="relative flex space-x-4">
        <div className="relative flex-grow">
          <input
            type="text"
            name="search"
            id="search"
            className="block w-60 rounded-full border-0 py-2 pl-10 pr-4 font-proxima text-md bg-gray-50 placeholder-gray-500"
            placeholder="Search for food"
            value={input}
            onChange={handleChange}
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 bg-gray-70 text-gray-400">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
