import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <div className="section search">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            ref={searchValue}
            onChange={searchCocktail}
            id="name"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
