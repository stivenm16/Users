// SearchInput.tsx

import React, { ChangeEvent } from 'react'

interface SearchInputProps {
  onSearch: (query: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    onSearch(query)
  }

  return (
    <div className="my-4 w-4/5 md:w-1/5 mx-auto p-5 bg-indigo-600 rounded-xl shadow-2xl">
      <label
        className="block text-white text-sm font-bold mb-2"
        htmlFor="searchInput"
      >
        Search by Category:
      </label>
      <input
        type="text"
        id="searchInput"
        placeholder="Enter category..."
        className="border rounded p-2 w-full"
        onChange={handleInputChange}
      />
    </div>
  )
}

export default SearchInput
