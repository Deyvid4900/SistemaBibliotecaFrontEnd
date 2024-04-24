import React, { useState } from "react";

interface SearchNavBarProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (searchTerm:string) => void;
  handleButtonClick: () => void;
 
}

const SearchNavBar: React.FC<SearchNavBarProps> = ({
  handleInputChange,
  onSearch,
  handleButtonClick
}) => {
    const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="d-flex align-items-center justify-content-between mb-5 mt-1">
      <div className="d-flex gap-5">
        <button className="btn btn-primary" onClick={handleButtonClick}>
          Create a new user
        </button>
      </div>
      <h1>Users</h1>

      <div className="d-flex align-items-baseline">
        <input
          type="text"
          value={searchTerm}
          onChange={()=>{
            setSearchTerm
            handleInputChange
          }}
          placeholder="Search by user name"
        />
        <button onClick={()=>onSearch(searchTerm)} className="d-flex justify-content-center">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchNavBar;
