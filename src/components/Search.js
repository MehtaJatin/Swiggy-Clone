const Search = (props) => {
  const { searchObject } = props;
  const { originalResList, setResList } = searchObject;
  return (
    <div className="search-container">
      <div className="search-input">
        <input
          type="text"
          className="search"
          placeholder="restaurant"
          onChange={searchRest(originalResList, setResList)}
        ></input>
      </div>
    </div>
  );
};

function searchRest(originalResList, setResList) {
  return (event) => {
    const filteredList = originalResList.filter((res) =>
      res.data.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(filteredList);
    setResList(filteredList);
  };
}

export default Search;
