import { useState } from "react";

const Search = (props) => {
  const { searchObject } = props;
  const { originalResList, setResList } = searchObject;
  const [searchText, setSearchText] = useState("");

  const searchRest = (event) => {
    const value = event.target.value;
    setSearchText(value);

    const filteredList = originalResList.filter((res) =>
      res.data.name.toLowerCase().includes(value.toLowerCase())
    );

    console.log(filteredList);
    setResList(filteredList);
  };

  return (
    <div className="search-container">
      <div className="search-input">
        <input
          type="text"
          className="search"
          placeholder="restaurant"
          value={searchText}
          onChange={searchRest}
        />
      </div>
    </div>
  );
};

export default Search;
