import React from "react";
import { SearchIcon } from "../../assets/icons/Icon";

const Search = (props) => {
  const styles = props.styles;
  const { search, setSearch } = props.value;
  return (
    <div className={styles.search}>
      <input
        type={"text"}
        placeholder={"Search..."}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchIcon fill="#8B8B8B" />
    </div>
  );
};

export default Search;
