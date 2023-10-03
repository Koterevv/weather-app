import React from "react";

export default function SearchForm({handleForm, handleSearch, search}) {
  return (
    <form onSubmit={handleForm} className="p-4 text-center">
      <input
        className="p-2 mr-3 border-my-dark-cyan border border-solid rounded-md"
        type="search"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
      <button className="p-2 border-my-dark-cyan border border-solid rounded-md">
        Search
      </button>
    </form>
  );
}
