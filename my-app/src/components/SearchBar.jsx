import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          {/* Search Input */}
          <input
            type="search"
            id="default-search"
            className="block px-4 py-1 lg:py-2 pl-4 text-xs lg:text-sm text-gray-900 rounded-lg bg-transparent w-42 md:w-60 lg:w-96 border border-white "
            placeholder="What do you want to watch? "
            required
          />

          {/* Search Icon */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer ">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
